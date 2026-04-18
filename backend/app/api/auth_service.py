from datetime import datetime, timedelta, UTC

import jwt
from fastapi import Request, Depends, HTTPException, status

from app.config import settings


ADMIN_NAME = settings.ADMIN_NAME
PASSWORD = settings.PASSWORD
JWT_ALGORITHM = "HS256"
JWT_EXPIRES_MINUTES = 60

def authenticate(username: str, password: str):
    return username == ADMIN_NAME and password == PASSWORD


def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    to_encode = data.copy()
    expire = datetime.now(UTC) + (expires_delta or timedelta(minutes=JWT_EXPIRES_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=JWT_ALGORITHM)


def require_login(request: Request):
    if request.session.get("user") != "admin":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")


RequireLogin = Depends(require_login)