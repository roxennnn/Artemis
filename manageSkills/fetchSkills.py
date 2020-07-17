csv = open("skills.csv", "r")
csv_lines = csv.readlines()
csv.close()

# print(csv_lines[1].split(',')[1].strip())

import requests 

# https://ec.europa.eu/esco/api/resource/skill?uri=http://data.europa.eu/esco/skill/3592e08e-2602-4700-a14f-084bd8ebf845&language=en

SKILL_URL = "https://ec.europa.eu/esco/api/resource/skill?"

occ_file = open("occupations.csv", "w")
occupations = {}
counter = 0

for index,line in enumerate(csv_lines):
	print(index)
	skill_uri = line.split(',')[0].strip()

	url = f'{SKILL_URL}uri={skill_uri}&language=en'
	response = requests.get(url=url) # fetcchiamo

	json = response.json()

	essential_occupations_links = json['_links']
	if not 'isEssentialForOccupation' in essential_occupations_links:
		print("IGNORED")
		counter += 1
		continue

	essential_occupations = essential_occupations_links['isEssentialForOccupation']	    

	for occ in essential_occupations:
		# print(occ['title'])
		title = occ['title']
		uri = occ['uri']
		occ_file.write(f'{title},{uri}\n')
		occupations[title] = uri


print(f'Ignored: {counter}')

# occ_file = open("occupations.csv", "w")

# for key in occupations:
# 	value = occupations[key]
# 	occ_file.write(f'{key},{value}')

occ_file.close()