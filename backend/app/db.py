from sqlmodel import create_engine, Session, SQLModel
from typing import Annotated
from fastapi import Depends

from app.config import settings

engine = create_engine(str(settings.PG_URL))

def get_session():
    with Session(engine) as session:
        yield session


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def destroy_db_and_tables():
    SQLModel.metadata.drop_all(engine)


SessionDep = Annotated[Session, Depends(get_session)]