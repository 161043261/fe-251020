from fastapi import HTTPException, Request, status
from clerk_backend_api import Clerk, AuthenticateRequestOptions
from os import getenv
from dotenv import load_dotenv
from typing import Optional

load_dotenv("./.env")

clerkSdk = Clerk(bearer_auth=getenv("CLERK_SECRET_KEY"))


def auth(request: Request):
    try:
        requestState = clerkSdk.authenticate_request(
            request=request,
            options=AuthenticateRequestOptions(
                authorized_parties=["*"],
                jwt_key=getenv("JWKS_PUBLIC_KEY"),
            ),
        )

        if not requestState.is_signed_in:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized"
            )

        userId: Optional[str] = None
        if requestState.payload is not None:
            userId = requestState.payload.get("sub")

        return {"userId": userId}

    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=e)
