from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parent.parent.parent
ENV_PATH = BASE_DIR / ".env.backend"

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=ENV_PATH,
        extra="ignore"
    )

    PG_URL: str = ...
    LINE_TOKEN: str = ...
    LINE_API: str = ...
    LINE_ID: str = ...


settings = Settings()