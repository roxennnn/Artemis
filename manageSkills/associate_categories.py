from pymongo import MongoClient

####################################################################################################
#                                          MongoDB setup                                           #
####################################################################################################
client = MongoClient("localhost:27017")
db_col = client["SkillMatches"]["NewOccupations_V"]

####################################################################################################
#                              Create dict with skill:category pairs                               #
####################################################################################################
if False:
	# Read "excel" file with associations
	file = open("categories.csv", "r")
	lines = file.readlines()
	file.close()

	# Category association dict
	associations = {}

	for line in lines:
		splitted = line.split(',')
		skill 	 = splitted[1].strip()
		category = splitted[0]

		associations[skill] = category

####################################################################################################
#                                 Add associations to occupations                                  #
####################################################################################################

# All the occupations
occupations = db_col.find()

if False:
	for occupation in occupations:
		oid = occupation['OID']		# occupation ID
		essentialSkills = occupation['hasEssentialSkill']
		title = occupation['title']

		# Associate categories to occupations
		categories = []
		for skill in essentialSkills:
			title = skill['title']
			if title in associations:
				category = associations[title]	# read from the dict the category
				categories.append(category)

		categories = list(set(categories)) 	# remove duplicates

		# Display the changes
		print(f'Occupation: {title}; Skills: {len(essentialSkills)}; Categories: {len(categories)}')

		# Update in DB
		update_query  = { 'OID': oid }
		update_values = { "$set": { "categories": categories } }
		db_col.update_one(update_query, update_values)
else:
	for occupation in occupations:
		title = occupation['title']
		essentialSkills = occupation['hasEssentialSkill']
		categories = occupation['categories']

		# Display the changes
		print(f'Occupation: {title}; Skills: {len(essentialSkills)}; Categories: {len(categories)}')

####################################################################################################
#                                         Category scores                                          #
####################################################################################################
occupations = db_col.find()

category_dict = {}

for occupation in occupations:
	categories = occupation["categories"]
	
	for category in categories:
		
		if category in category_dict:
			category_dict[category] += 1
		else:
			category_dict[category] = 1

output_file = open("category_scores.csv", "w")

for c in category_dict:
	output_file.write(f'{c},{category_dict[c]}\n')

output_file.close()
