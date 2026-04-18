from fastapi import APIRouter, Request, HTTPException, status

from app.models import LoginResponse, LoginRequest
from app.api.auth_service import authenticate, create_access_token


router = APIRouter(tags=["auth"])


@router.post("/login/", response_model=LoginResponse)
async def login(identity: LoginRequest, request: Request):
    if not authenticate(identity.username, identity.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    request.session["user"] = "admin"
    token = create_access_token({"sub": identity.username})
    return LoginResponse(message="Login successful", token=token)
