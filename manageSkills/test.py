occs = open("occupations.csv", "r")

lines = list(set(occs.readlines()))

occs.close()

new_occ = open("new_occupations.xls", "w")

for line in lines:
	new_occ.write(f'{line}')

new_occ.close()