from datetime import datetime
from sqlmodel import SQLModel, Field

class Projects(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    description: str
    start_date: datetime
    image_url: str | None = Field(default=None, nullable=True)
    is_star: bool

