import os
from sqlmodel import SQLModel, create_engine, Session
from app.core.config import settings

# Asegurar que el directorio de la base de datos exista
db_dir = os.path.dirname(settings.DATABASE_URL.replace("sqlite:///", ""))
if db_dir:
    os.makedirs(db_dir, exist_ok=True)

engine = create_engine(
    settings.DATABASE_URL,
    echo=False,
    connect_args={"check_same_thread": False}
)

def init_db():
    SQLModel.metadata.create_all(engine)
    # Importar y ejecutar seed si la base está vacía
    from app.db.seed import seed_database
    with Session(engine) as session:
        seed_database(session)

def get_session():
    with Session(engine) as session:
        yield session
