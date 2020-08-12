import mongoose from "mongoose";

import db from "../models/index.js";
const User = db.user;
const Occupation = db.occupation;

import { workUrFreedomContract } from "../server.js";

const es_categories =[
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
];
const en_categories = [
  "Organise basic activities",
  "Perform administrative tasks ",
  "Process payments",
  "Handle money",
  "Administer financial information",
  "Perform cleaning activities (at home)",
  "Perform cleaning activities in an environment beyond home",
  "Perform basic first aid",
  "Act as a leader",
  "Work under pressure",
  "Work in a team",
  "Drive a car",
  "Conduct basic food preparation",
  "Cook meat and fish",
  "Cook vegetables and dairy products",
  "Cook pasta",
  "Prepare deserts such as pastries",
  "Prepare fish for cooking",
  "Prepare sandwiches",
  "Prepare drinks such as cocktails or speciality coffees",
  "Present food in an appealing manner",
  "Understand diets and nutitional properties of food",
  "Keep a clean kitchen",
  "Maintain cooking equipment",
  "Operate cooking equipment",
  "Greet guests",
  "Serve food and drinks",
  "Work with recipes",
  "Store food safely",
  "Apply make-up",
  "Perform nail care treatments",
  "Perform skin care treatments",
  "Remove body hair",
  "Give massages",
  "Wash and style hair",
  "Cut perm and colour hair",
  "Treat minor problems with the hair or scalp",
  "Provide information and give instructions",
  "Write information in a clear way",
  "Collect information",
  "Understand and answer technical questions",
  "Understand and follow guidelines",
  "Assist people and give advices",
  "Guide tourists or other visitors",
  "Be familiar with the local culture",
  "Assist guests during events",
  "Plan and organise activities for guests",
  "Manage groups of people",
  "Assist people with mobility",
  "Maintain good public relations",
  "Interpret and respond adequately to people's emotions",
  "Speak more than one language",
  "Provide care and assistance to children",
  "Assist children in learning",
  "Provide school assistance",
  "Help children with special learning difficulties",
  "Help children to resolve personal psychological or social problems",
  "Run domestic care activities",
  "Assist people with disabilities",
  "Assist elderly people",
];
const pt_categories = [
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
];

export const fetchMatchings = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  // console.log(userId);
  const language = req.params.lang;

  const skillScores = await getSkillScores(userId);
  if (skillScores.length === 0) {
    res.status(404).send({ message: `Fetching skills data error: ${err}` });
    return;
  }

  const occupations = await getOccupationList(language);
  if (occupations.length === 0) {
    res
      .status(404)
      .send({ message: `Fetching occupations data error: ${err}` });
    return;
  }

  let scoredOccupations = [];
  for (let i = 0; i < occupations.length; i++) {
    const occupation = occupations[i];

    let score = 0;
    const categories = occupation["categories"];
    const categoriesNum = categories.length;
    for (let j = 0; j < categoriesNum; j++) {
      const cat = categories[j];
      score += ((skillScores[cat] - 1) / 3) * 100; // from 0 to 3
    }

    const meanScore = score / categoriesNum;
    // const percentScore = meanScore * 100;

    let scored = {};
    scored["score"] = meanScore.toFixed(2);
    scored["OID"] = occupation["OID"];
    let title = occupation["title"];
    if (title.includes("/")) {
      title = title.split("/")[1];
    } else if (title === "pizzaiolo") {
      title = "pizzaiola";
    }
    scored["title"] = title.charAt(0).toUpperCase() + title.slice(1);

    scoredOccupations.push(scored);
  }

  scoredOccupations.sort(compareOccupations);

  res.status(200).send({ scoredOccupations });
  return;
};

export const fetchOccupationDetail = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  const language = req.params.lang;

  const skillScores = await getSkillScores(userId);
  if (skillScores.length === 0) {
    res.status(404).send({ message: `Fetching skills data error: ${err}` });
    return;
  }

  const occupation = await getOccupationDetail(req.params.oid, language);
  if (!occupation) {
    res
      .status(404)
      .send({ message: `Fetching occupations data error: ${err}` });
    return;
  }

  const categoryIds = occupation.categories;

  let categoryScores = [];
  for (let c = 0; c < categoryIds.length; c++) {
    const cat = categoryIds[c];
    categoryScores.push((((skillScores[cat] - 1) / 3) * 100).toFixed(2));
  }

  // What to respond
  let details = {};

  let title = occupation.title;
  if (title.includes("/")) {
    title = title.split("/")[1];
  } else if (title === "pizzaiolo") {
    title = "pizzaiola";
  }
  details.title = title.charAt(0).toUpperCase() + title.slice(1);
  details.description = occupation.description;
  details.categories = occupation.categories;
  details.category_names = occupation.category_names;
  details.category_scores = categoryScores.sort((a, b) => {
    return b - a;
  });

  res.status(200).send({ details });
  return;
};

export const fetchSkills = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  const language = req.params.lang;

  let categories;
  if (language === "en") {
    categories = en_categories;
  } else if (language === "es") {
    categories = es_categories;
  } else if (language === "pt") {
    categories = pt_categories;
  }

  const skillScores = await getSkillScores(userId);
  if (skillScores.length === 0) {
    res.status(404).send({ message: `Fetching skills data error: ${err}` });
    return;
  }

  const scores = [];
  if (skillScores.length !== categories.length) {
    console.log("skill array lenghts are different...");
    res.status(500).send({ message: "skill array lenghts are different..." });
  }
  for (let i = 0; i < skillScores.length; i++) {
    let name = categories[i];
    let score = ((skillScores[i] - 1) / 3) * 100;
    scores.push({ name: name, score: score.toFixed(2) });
  }

  scores.sort(compareSkills);

  res.status(200).send({ scores });
  return;
};

// Utilities

const compareOccupations = (a, b) => {
  if (parseFloat(a.score) < parseFloat(b.score)) {
    return 1;
  }
  if (parseFloat(a.score) > parseFloat(b.score)) {
    return -1;
  }
  return 0;
};

const compareSkills = (a, b) => {
  if (parseFloat(a.score) < parseFloat(b.score)) {
    return 1;
  }
  if (parseFloat(a.score) > parseFloat(b.score)) {
    return -1;
  }
  return 0;
};

const getSkillScores = async (userId) => {
  let scores = [];
  try {
    const user = await User.findOne(
      { _id: userId },
      { _id: 0, eth_address: 1 }
    ).exec();

    const userAddr = user["eth_address"];
    // console.log(userAddr);

    scores = await workUrFreedomContract.methods
      .getSkillsData()
      .call({ from: userAddr });
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
  return scores;
};

const getOccupationList = async (language) => {
  let occupations = [];
  try {
    occupations = await Occupation.find({language: language}).exec();
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
  return occupations;
};

const getOccupationDetail = async (oid, language) => {
  let occupation;
  try {
    occupation = await Occupation.findOne({ OID: oid, language: language }).exec();
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
  return occupation;
};
