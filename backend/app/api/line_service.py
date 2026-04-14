import httpx

from app.models import LineMessageObject, LinePushMessage
from app.config import settings


async def push_message(text: str, name: str):
    url = settings.LINE_API

    message = (f"You have new contact from {name}!\n\n"
               f"message:\n{text}"
               )

    payload = LinePushMessage(
        to=settings.LINE_ID,
        messages=[LineMessageObject(
            text=message,
        ),]
    )

    headers = {
        "Authorization": f"Bearer {settings.LINE_TOKEN}"
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json=payload.model_dump(), headers=headers)

    return {
        "status_code": response.status_code,
        "response": response.json()
    }