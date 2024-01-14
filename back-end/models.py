"""
DB models
"""

from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
	"""
	Base User model
	"""
	id: Optional[str] = ""
	name: str = ""
	email: str = ""
