from fastapi import Request, Depends, HTTPException, status

from app.config import settings


ADMIN_NAME = settings.ADMIN_NAME
PASSWORD = settings.PASSWORD

def authenticate(username: str, password: str):
    return username == ADMIN_NAME and password == PASSWORD


def require_login(request: Request):
    if request.session.get("user") != "admin":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")


RequireLogin = Depends(require_login)