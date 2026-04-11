from fastapi import APIRouter

from app.api.router import project
api_router_v1 = APIRouter(
    prefix="/api/v1",
)

api_router_v1.include_router(project.router)