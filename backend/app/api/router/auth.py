from fastapi import APIRouter, HTTPException, status

from app.models import LoginRequest, Token
from app.api.auth_service import authenticate, create_access_token


router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/token", response_model=Token)
async def login(identity: LoginRequest):
    if not authenticate(identity.username, identity.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token({"sub": identity.username})
    return Token(access_token=access_token, token_type="bearer")

