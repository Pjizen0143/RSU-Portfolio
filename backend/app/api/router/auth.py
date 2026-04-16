from fastapi import APIRouter, Request, HTTPException, status

from app.models import Message, LoginRequest
from app.api.auth_service import authenticate


router = APIRouter(tags=["auth"])


@router.post("/login", response_model=Message)
async def login(identity: LoginRequest, request: Request):
    if not authenticate(identity.username, identity.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    request.session["user"] = "admin"
    return Message(message="Login successful")


@router.post("/logout", response_model=Message)
async def logout(request: Request):
    request.session.clear()
    return Message(message="Logged out")
