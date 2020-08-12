from pymongo import MongoClient

client = MongoClient("localhost:27017")
db_wuf_en = client["work_ur_freedom_db"]["occupation_en"]
db_wuf_es = client["work_ur_freedom_db"]["occupation_es"]
db_wuf_pt = client["work_ur_freedom_db"]["occupation_pt"]
db_wuf    = client["work_ur_freedom_db"]["occupation"]

def insert_with_language(occupations, lang):
  for occupation in occupations:
    to_insert = {}
    to_insert['title']          = occupation['title']
    to_insert['description']    = occupation['description']
    to_insert['OID']            = occupation['OID']
    to_insert['categories']     = occupation['categories']
    to_insert['category_names'] = occupation['category_names']
    to_insert['language']       = lang

    db_wuf.insert_one(to_insert)



occupations_en = db_wuf_en.find()
occupations_es = db_wuf_es.find()
occupations_pt = db_wuf_pt.find()

insert_with_language(occupations_en, "en")
insert_with_language(occupations_es, "es")
insert_with_language(occupations_pt, "pt") 