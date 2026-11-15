import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    AI_PROVIDER: str = "deepseek"  # "deepseek" | "gemini"
    DEEPSEEK_API_KEY: str = ""
    DEEPSEEK_MODEL: str = "deepseek-chat"
    GEMINI_API_KEY: str = ""
    HOST: str = "127.0.0.1"
    PORT: int = 8001
    DEBUG: bool = True
    DATABASE_URL: str = "sqlite:///data/antirecetario.db"
    RATE_LIMIT_DELAY_SECONDS: float = 1.0

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

settings = Settings()

# Fallbacks si están en os.environ
if not settings.DEEPSEEK_API_KEY and "DEEPSEEK_API_KEY" in os.environ:
    settings.DEEPSEEK_API_KEY = os.environ["DEEPSEEK_API_KEY"]

if not settings.GEMINI_API_KEY and "GEMINI_API_KEY" in os.environ:
    settings.GEMINI_API_KEY = os.environ["GEMINI_API_KEY"]
