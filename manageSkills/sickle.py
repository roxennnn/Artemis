from pymongo import MongoClient

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient("localhost:27017")
db = client["SkillMatches"]
db_occ = db["Occupations_V"]
db_new = db["NewOccupations_V"]

db_new.drop()

# Data
threshold = 0.15

sk_file = open("skills.csv", "r")
sk_lines = sk_file.readlines()
sk_file.close()

skillz = []
skill_dict = {}
for line in sk_lines:
	splitted = line.split(',')
	skillz.append(splitted[1].strip())
	skill_dict[splitted[1].strip()] = splitted[2].strip()


occupations = db_occ.find()

old_skillz 	= []
new_skillz 	= []
full_skillz = []

output_occ = open("output_occ.csv", "w")
output_s = open("output_s.csv", "w")

print(f'START: {db_occ.find().count()}')

for index,occupation in enumerate(occupations):

	essentialSkills = occupation["hasEssentialSkill"]

	counter = 0
	length = len(essentialSkills)

	for e in essentialSkills:
		old_skillz.append(e['title'])
		if e['title'] in skillz:
			counter += 1

	rate = counter / length
	if rate > threshold:
		title = occupation["title"]
		uri   = occupation["uri"]
		output_occ.write(f'{title},{uri}\n')
		db_new.insert_one(occupation)
		for e in essentialSkills:
			new_skillz.append(e['title'])
			full_skillz.append(e)

print(f'Occupations: {db_new.find().count()}')
print()

old_skillz = list(set(old_skillz))
new_skillz = list(set(new_skillz))

print(f'OLD: {len(old_skillz)}')
print(f'NEW: {len(new_skillz)}')

new_counter = 0
for n in new_skillz:
	
	if n in skillz:
		# print(n)
		new_counter += 1

print(f'Matching skillz: {new_counter}')

strs = []
for f in full_skillz:
	title = f['title']
	title = title.replace(",", "-")
	uri   = f['uri']
	strs.append(f'{title},{uri}')

strs = list(set(strs))
for s in strs:
	title = s.split(",")[0]
	if title in skillz:
		# match = "Y"
		match = skill_dict[title].replace(";", ",")
	else:
		match = "Nope"

	output_s.write(f'{s},{match}\n')

output_s.close()
output_occ.close()