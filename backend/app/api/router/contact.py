from fastapi import APIRouter, HTTPException, status, BackgroundTasks, Depends

from app.api.line_service import push_message
from app.api.auth_service import get_current_user
from app.models import Message, ContactCreate, Contacts
from app.db import SessionDep
from app import crud

router = APIRouter(prefix="/contacts", tags=["contacts"])


@router.post("/", response_model=Message, status_code=status.HTTP_201_CREATED)
async def create_contact(contact: ContactCreate, session: SessionDep, background_tasks: BackgroundTasks):
    contact = crud.create_contact(contact_in=contact, session=session)
    if contact is None:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Create failed")
    background_tasks.add_task(push_message, contact.message, contact.name)
    return Message(message="Contact created successfully")


@router.get("/", response_model=list[Contacts])
async def get_contact(session: SessionDep, skip: int = 0, limit: int = 100):
    return crud.get_contact(skip=skip, limit=limit, session=session)


@router.delete("/{contact_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(get_current_user)])
async def delete_contact(contact_id: int, session: SessionDep):
    if not crud.delete_contact(contact_id=contact_id, session=session):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Contact not found")
