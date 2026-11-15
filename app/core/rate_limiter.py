import asyncio
import time
from app.core.config import settings

class AsyncRateLimiter:
    """
    Garantiza un espaciado mínimo entre llamadas consecutivas a la API de Gemini
    para evitar errores de cuota (HTTP 429) entre pestañas o peticiones concurrentes.
    """
    def __init__(self, delay_seconds: float = None):
        self.delay_seconds = delay_seconds or settings.RATE_LIMIT_DELAY_SECONDS
        self._last_call_time = 0.0
        self._lock = asyncio.Lock()

    async def acquire(self):
        async with self._lock:
            now = time.time()
            elapsed = now - self._last_call_time
            if elapsed < self.delay_seconds:
                wait_time = self.delay_seconds - elapsed
                await asyncio.sleep(wait_time)
            self._last_call_time = time.time()

gemini_rate_limiter = AsyncRateLimiter()
