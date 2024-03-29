"""
DB configuration
"""

from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient(os.getenv('DB'))

db = client.users

collection = db.all_users
