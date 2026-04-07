from fastapi import FastAPI

from app.db import create_db_and_tables

async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield

app = FastAPI(lifespan=lifespan)

