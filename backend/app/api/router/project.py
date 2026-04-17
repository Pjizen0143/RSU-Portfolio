from fastapi import APIRouter, HTTPException, status

from app.models import ProjectCreate, Message, Projects
from app.db import SessionDep
from app import crud



router = APIRouter(prefix="/projects", tags=["projects"])


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=Message)
async def create_projects(project_in: ProjectCreate, session: SessionDep):
    project = crud.create_project(project_in=project_in, session=session)
    if project is None:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Create failed")
    return Message(message="Project created successfully")


@router.delete("/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_project(project_id: int, session: SessionDep):
    if not crud.delete_project(project_id=project_id, session=session):
        raise HTTPException(status_code=404, detail="Project not found")


@router.get("/", response_model=list[Projects])
async def get_projects(session: SessionDep, skip: int = 0, limit: int = 10):
    return crud.get_projects(session=session, skip=skip, limit=limit)
