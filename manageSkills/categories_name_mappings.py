from pymongo import MongoClient

####################################################################################################
#                                          MongoDB setup                                           #
####################################################################################################
client = MongoClient("localhost:27017")
db_col = client["SkillMatches"]["WorkUrFreedomOccupations"]
db_wuf = client["work_ur_freedom_db"]["occupation"]

####################################################################################################
#                                Create dict with old:new name pairs                               #
####################################################################################################
if True:
	# Read "excel" file with categories old:new name pairs
	file = open("skills_name_matching.csv", "r")
	lines = file.readlines()
	file.close()

	# Category association dict
	categories = {}

	for id,line in enumerate(lines):
		splitted	= line.split(',')
		old 	 		= splitted[1].strip()
		new 			= splitted[0].strip()
		# Check
		if new == "" or old == "": print(id)

		categories[old] = [id,new]


####################################################################################################
#                                  Migrate to work_ur_freedom_db                                   #
####################################################################################################
if True:
	occupations = db_col.find()
	
	for oid,occupation in enumerate(occupations):
		cat_names = []
		cat_ids = []
		cats = occupation['categories']

		for c in cats:
			print(c)
			tmp = categories[c][1]
			id = categories[c][0]
			cat_ids.append(id)
			cat_names.append(tmp)
		
		to_migrate = {}
		to_migrate['OID'] 						= oid
		to_migrate['categories'] 			= cat_ids
		to_migrate['category_names'] 	= cat_names
		to_migrate['description'] 		= occupation['description']['literal']
		to_migrate['title']						= occupation['title']

		db_wuf.insert_one(to_migrate)

