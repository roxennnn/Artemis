es_categories =[
  "Organizar actividades básicas",
  "Realizar tareas administrativas",
  "Procesar pagos",
  "Manejar dinero",
  "Administrar información financiera",
  "Realizar actividades de limpieza (en casa)",
  "Realizar actividades de limpieza en un entorno fuera del hogar",
  "Realizar primeros auxilios básicos",
  "Actuar como líder",
  "Trabajar bajo presión",
  "Trabajar en un equipo",
  "Andar en coche",
  "Realizar la preparación básica de alimentos",
  "Cocine carne y pescado",
  "Cocine verduras y productos lácteos",
  "Cocine pasta",
  "Preparar postres como pasteles",
  "Preparar pescado para cocinar",
  "Preparar sándwiches",
  "Prepare bebidas como cócteles o cafés especiales",
  "Presenta la comida de una manera atractiva",
  "Comprender las dietas y las propiedades nutricionales de los alimentos",
  "Mantener una cocina limpia",
  "Mantener el equipo de cocina",
  "Operar equipo de cocina",
  "Saludar a las invitadas",
  "Sirve comida y bebida",
  "Trabajar con recetas",
  "Almacene los alimentos de forma segura",
  "Aplicar el maquillaje",
  "Realizar tratamientos de cuidado de uñas",
  "Realizar tratamientos de cuidado de la piel",
  "Eliminar el vello corporal",
  "Dar masajes",
  "Lavar y peinar el cabello",
  "Cortar el cabello permanente y teñido",
  "Tratar problemas menores con el cabello o el cuero cabelludo",
  "Brindar información y dar instrucciones",
  "Escribe información de forma clara",
  "Recopilar información",
  "Comprender y responder preguntas técnicas",
  "Comprender y seguir las pautas",
  "Ayudar a las personas y dar consejos",
  "Guiar a turistas u otros visitantes",
  "Estar familiarizada con la cultura local",
  "Ayudar a los invitados durante los eventos",
  "Planificar y organizar actividades para invitados",
  "Gestionar grupos de personas",
  "Ayudar a las personas con movilidad",
  "Mantener buenas relaciones públicas",
  "Interpretar y responder adecuadamente a las emociones de las personas",
  "Habla más de un idioma",
  "Brindar atención y asistencia a los niños",
  "Ayudar a los niños a aprender",
  "Proporcionar asistencia escolar",
  "Ayudar a los niños con dificultades especiales de aprendizaje",
  "Ayudar a los niños a resolver problemas personales psicológicos o sociales",
  "Ejecutar actividades de cuidado doméstico",
  "Ayudar a las personas con discapacidad",
  "Ayudar a las personas mayores",
]
pt_categories = [
  "Organizar atividades básicas",
  "Executar tarefas administrativas",
  "Processar pagamentos",
  "Mausear dinheiro",
  "Administrar informações financeiras",
  "Realizar atividades de limpeza (em casa)",
  "Realize atividades de limpeza em um ambiente fora de casa",
  "Realizar primeiros socorros básicos",
  "Aja como um líder",
  "Trabalhar sob pressão",
  "Trabalhar em equipe",
  "Dirigir um carro",
  "Conduzir a preparação de alimentos básicos",
  "Cozinhe carne e peixe",
  "Cozinhe vegetais e laticínios",
  "Cozinhar macarrão",
  "Prepare sobremesas como pastéis",
  "Prepare peixes para cozinhar",
  "Preparar sanduíches",
  "Prepare bebidas como coquetéis ou cafés especiais",
  "Apresente a comida de maneira atraente",
  "Compreenda as dietas e as propriedades nutricionais dos alimentos",
  "Mantenha uma cozinha limpa",
  "Manter equipamentos de cozinha",
  "Operar equipamentos de cozinha",
  "Cumprimentar convidados",
  "Sirva comidas e bebidas",
  "Trabalhe com receitas",
  "Armazene alimentos com segurança",
  "Aplicar maquiagem",
  "Faça tratamentos para as unhas",
  "Realizar tratamentos de cuidados com a pele",
  "Remover pelos do corpo",
  "Dar massagens",
  "Lave e penteie o cabelo",
  "Corte permanente e pinte o cabelo",
  "Trate pequenos problemas com o cabelo ou couro cabeludo",
  "Fornece informações e dá instruções",
  "Escreva as informações de forma clara",
  "Coletar informação",
  "Entenda e responda a perguntas técnicas",
  "Entenda e siga as diretrizes",
  "Auxiliar as pessoas e dar conselhos",
  "Guia de turistas ou outros visitantes",
  "Familiarize-se com a cultura local",
  "Auxiliar os convidados durante os eventos",
  "Planejar e organizar atividades para os hóspedes",
  "Gerenciar grupos de pessoas",
  "Auxiliar as pessoas com mobilidade",
  "Manter boas relações públicas",
  "Interprete e responda adequadamente às emoções das pessoas",
  "Fala mais de um idioma",
  "Prestar cuidados e assistência a crianças",
  "Ajude as crianças a aprender",
  "Fornece assistência escolar",
  "Ajude crianças com dificuldades especiais de aprendizagem",
  "Ajude as crianças a resolver problemas psicológicos ou sociais pessoais",
  "Executar atividades domésticas",
  "Assistir pessoas com deficiência",
  "Assistir idosos",
]

import requests
from pymongo import MongoClient

OCCUPATION_URL = "https://ec.europa.eu/esco/api/resource/occupation?"

client = MongoClient("localhost:27017")
db_occs = client["SkillMatches"]["Occupations_V"]
db_wuf_en = client["work_ur_freedom_db"]["occupation_en"]
db_wuf_es = client["work_ur_freedom_db"]["occupation_es"]
db_wuf_pt = client["work_ur_freedom_db"]["occupation_pt"]

occupations = db_occs.find({}, {'title': 1, 'uri': 1, '_id': 0})

# oid             from en
# categories:     from en
# category_names: from arrays + categories from en
# description:    from uri
# title:          from uri

counter = 0
for occupation in occupations:
  title = occupation['title']
  english = db_wuf_en.find_one({'title': title})
  if english != None:
    oid         = english['OID']
    categories  = english['categories']
    uri         = occupation['uri']

    category_names_es = []
    category_names_pt = []

    for cat in categories:
      category_names_es.append(es_categories[cat])
      category_names_pt.append(pt_categories[cat])

    url_es = f'{OCCUPATION_URL}uri={uri}&language=es'
    url_pt = f'{OCCUPATION_URL}uri={uri}&language=pt'

    # requests
    response_es = requests.get(url=url_es)
    json_es     = response_es.json()
    response_pt = requests.get(url=url_pt)
    json_pt     = response_pt.json()

    # descriptions and titles
    description_es  = json_es['description']['es']['literal']
    title_es        = json_es['title']
    description_pt  = json_pt['description']['pt']['literal']
    title_pt        = json_pt['title']

    # spanish
    occ_es = {}
    occ_es['OID']             = oid
    occ_es['categories']      = categories
    occ_es['category_names']  = category_names_es
    occ_es['description']     = description_es
    occ_es['title']           = title_es
    db_wuf_es.insert_one(occ_es)

    # portuguese
    occ_pt = {}
    occ_pt['OID']             = oid
    occ_pt['categories']      = categories
    occ_pt['category_names']  = category_names_pt
    occ_pt['description']     = description_pt
    occ_pt['title']           = title_pt
    db_wuf_pt.insert_one(occ_pt)

    counter += 1
    print(counter)