"""
Hash code modeling
"""

import hashlib
from dotenv import load_dotenv
import os

load_dotenv()

def hashing(id: str):
	"""
	Hashing id realisation
	"""
	dataBase_password = id+os.getenv('SALT')
	hashed = hashlib.md5(dataBase_password.encode())
	return hashed.hexdigest()
