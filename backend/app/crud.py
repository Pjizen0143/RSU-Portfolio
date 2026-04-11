from sqlmodel import Session, select

from app.models import ProjectCreate, Projects


def create_project(*, session: Session, project_in: ProjectCreate) -> Projects:
    db_obj = Projects.model_validate(
        project_in
    )
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def delete_project(*, session: Session, project_id: int):
    project = session.get(Projects, project_id)
    if not project:
        return False
    session.delete(project)
    session.commit()
    return True


def get_projects(*, session: Session, skip: int = 0, limit: int = 10) -> list[Projects]:
    projects = session.exec(select(Projects).offset(skip).limit(limit)).all()
    return list(projects)
