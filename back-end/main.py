"""
Main configuration deps
"""

from app import app
from database import collection
from models import User
from typing import List
from hashCode import hashing

@app.get('/users/', response_model=List[User])
async def getAllUsers():
	"""
	GET request to find and return all users
	"""
	return list(collection.find({}))

@app.post('/new-user/', response_model=User)
async def addNewUser(user: User):
	"""
	POST request to write new user to db
	"""
	db_user = User(id=hashing(user.email), name=user.name, email=user.email)
	collection.insert_one(db_user.dict())
	return db_user.dict()
