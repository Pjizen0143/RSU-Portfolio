from datetime import datetime
from sqlmodel import SQLModel, Field


# Share properties
class ProjectBase(SQLModel):
    name: str | None = Field(default="My Project", max_length=60)
    description: str | None = Field(default="My Project Description", max_length=255)
    start_date: datetime | None = Field(default=None, nullable=True)
    image_url: str | None = Field(default=None, nullable=True)
    is_star: bool = False


class ContactBase(SQLModel):
    name: str | None = Field(default="My Contact", max_length=60)
    email: str | None = Field(default="<EMAIL>", max_length=60)
    message: str | None = Field(default="My Contact Message", max_length=2500)

# API Schemas
class Message(SQLModel):
    message: str


class ProjectCreate(ProjectBase):
    pass


class ProjectPublic(ProjectBase):
    pass


class ProjectUpdate(ProjectBase):
    pass


class ContactCreate(ContactBase):
    pass


class ContactPublic(ContactBase):
    pass


# Database Model
class Projects(ProjectBase, table=True):
    id: int | None = Field(default=None, primary_key=True)


class Contacts(ContactBase, table=True):
    id: int | None = Field(default=None, primary_key=True)


# LINE-OA Schemas
class LineMessageObject(SQLModel):
    type: str = "text"
    text: str

class LinePushMessage(SQLModel):
    to: str
    messages: list[LineMessageObject]