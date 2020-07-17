import requests
from pymongo import MongoClient

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient("localhost:27017")
db = client["SkillMatches"]["Occupations_V"]

# occs = open("occupations.csv", "r")
occs = open("sickled_occupations.csv", "r")
lines = list(set(occs.readlines()))
occs.close()

OCCUPATION_URL = "https://ec.europa.eu/esco/api/resource/occupation?"

for index,line in enumerate(lines):
	if index % 10 == 0:
		print(index)

	# if index == 30:
	# 	break

	occ_uri = line.strip(' \n,').split(',')[-1].strip()

	url = f'{OCCUPATION_URL}uri={occ_uri}&language=en'

	response = requests.get(url=url) # fetcchiamo

	json = response.json()

	to_insert = {}
	to_insert['title'] 					= json['title']
	to_insert['uri']					= json['uri']
	to_insert['description'] 			= json['description']['en']
	to_insert['OID'] 					= index
	to_insert['hasEssentialSkill'] 		= json['_links']['hasEssentialSkill']
	if 'hasOptionalSkill' in json:
		to_insert['hasOptionalSkill']	= json['_links']['hasOptionalSkill']

	db.insert_one(to_insert)