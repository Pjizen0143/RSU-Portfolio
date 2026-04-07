from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import PostgresDsn

BASE_DIR = Path(__file__).resolve().parent.parent.parent
ENV_PATH = BASE_DIR / ".env"

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=ENV_PATH,
        extra="ignore"
    )

    PG_USER: str = ...
    PG_PASSWORD: str = ...
    PG_DATABASE: str = ...
    PG_HOST: str = "db"
    PG_PORT: int = 5432

    @property
    def db_url(self) -> PostgresDsn:
        return PostgresDsn.build(
            scheme="postgresql",
            username=self.PG_USER,
            password=self.PG_PASSWORD,
            host=self.PG_HOST,
            port=self.PG_PORT,
            path=self.PG_DATABASE
        )


settings = Settings()