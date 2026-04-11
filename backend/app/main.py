from fastapi import FastAPI

from app.api.api import api_router_v1
from app.db import create_db_and_tables

async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield

app = FastAPI(lifespan=lifespan)
app.include_router(api_router_v1)
