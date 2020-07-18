from pymongo import MongoClient

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient("localhost:27017")
db = client["SkillMatches"]["NewOccupations_V"]

occupations = db.find()

skill_dict = {}

for occupation in occupations:
	skills = occupation["hasEssentialSkill"]
	
	for skill in skills:
		title = skill["title"]

		if title in skill_dict:
			skill_dict[title] += 1
		else:
			skill_dict[title] = 1

# print(skill_dict)
output_file = open("skill_scores.csv", "w")

for s in skill_dict:
	output_file.write(f'{s},{skill_dict[s]}\n')

output_file.close()
