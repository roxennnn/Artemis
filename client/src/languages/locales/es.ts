import es_categories from "./categories/es_categories.js";

export default {
  back: "Regresa",
  anErrorHasOccurred: "Se ha producido un error",
  NavComponent: {
    LoginNavbar: {
      loginQuestion: "¿Ya tienes una cuenta?",
      password: "Contraseña",
      forgotPassword: "¿Olvidaste tu contraseña?",
      newHere: "Nueva aquí ?",
      joinUs: "Únete a nosotras!",
    },
    LearnMore: {
      learnMore: "Aprende más",
      whatIsThisWebsite: "¿Qué es este sitio web?",
      howToUseIt: "Cómo utilizar nuestro sitio web",
      whatAndWhyOfThisDatabase: "¿Qué y por qué de esta base de datos?",
      useOfBlockchain: "Uso de blockchain",
      technicalDocumentation: "Documentación técnica",
    },
    contactUs: "Contáctenos",
  },
  LandingPage: {
    learnMore: "Aprende más",
  },
  SignupPage: {
    registerForFree: "¡Registrate gratis!",
    areYouA: "Eres una ...?",
    citizen: "Ciudadana",
    organisation: "Organización",
    notAWoman: "¿No eres una mujer?",
    notAnOrganisation: "¿No es una organización?",
    signupQuestion: "¿Aún no tienes una cuenta? ¡Registrate gratis!",
    citizenSignUp: "Registro de mujer",
    organisationSignUp: "Registro de la organización",
    organisationName: "Nombre de la organización",
    enterOrganisationName: "Ingrese el nombre de la organización",
    enterYourUsername: "Entra tu username",
    emailAddress: "Dirección de correo",
    enterYourEmailAddress: "Entra tu dirección de correo",
    invalidEmail: "La dirección de correo no es válida.",
    confirmEmailAddress: "Confirmar el correo",
    reEnterYourEmailAddress: "Vuelva a introducir su dirección de correo",
    emailsDontMatch: "Las direcciones de correo no coinciden.",
    password: "Contraseña",
    passwordLength: "La contraseña debe tener al menos 8 caracteres.",
    confirmPassword: "Confirmar contraseña",
    passwordsDontMatch: "Las contraseñas no coinciden.",
    neverShare: "Nunca compartiremos su información personal con nadie más.",
    agreeTo: "Acepta los",
    terms: "términos",
    and: "y",
    conditions: "condiciones",
    youMustAgree: "Debes estar de acuerdo antes de enviar.",
    register: "Registrarse",
  },
  ProfileListings: {
    profile: "Perfil",
    messages: "Mensajes",
    occupations: "Ocupaciones",
    skills: "Habilidades",
    settings: "Ajustes",
  },
  Profile: {
    manageProfile: "Administrar perfil",
    surveysCompleted: "Encuestas completadas:",
    changeAvatar: "Cambiar avatar",
    ProfileIntro: {
      goToSurveys: "Ir a encuestas",
      topMatching: "Coincidencia superior:",
    },
    ProfileSurveys: {
      takeSurvey: "Realizar encuesta",
      resetAnswers: "Restablecer respuestas",
      retakeSurvey: "Volver a realizar la encuesta",
      lastAccess: "Ultimo acceso:",
      youMustAnswerToThisQuestion: "¡Debes responder a esta pregunta!",
      youMustAnswerToAllTheQuestions: "¡Debes responder a todas las preguntas!",
      DemographicsSurvey: {
        title: "Encuesta demográfica",
        description:
          "Compartir con nosotros parte de su información personal nos ayudará a crear su perfil y conocerlo mejor.",
        introduction:
          "Al completar esta sección, nos ayudará a crear su perfil y comprender sus antecedentes. Esto es muy importante porque contribuirá aún más a encontrar el trabajo adecuado para usted, adecuado para su edad, horario de ubicación, etc. Su información se mantiene confidencial.",
        howOldAreYou: "¿Cuantos años tienes?",
        selectYourAge: "Seleccione su edad",
        younger: "17 años o menos",
        older: "65 años o más",
        whereAreYouFrom: "¿De donde eres?",
        weddingAge: "¿Cuantos años tenias cuando te casaste?",
        selectTheAge: "Seleccione la edad",
        selectCountry: "Seleccione un país",
        selectARegion: "Seleccione una región",
        submit: "Enviar",
        transportation: {
          title: "Medios de transporte disponibles:",
          bike: "Bicicleta",
          car: "Coche",
          bus: "Autobús/Tranvía",
          train: "Tren",
          scooter: "Scooter/Moto",
          other: "Otro",
        },
        education: {
          title: "¿Cual es tu nivel más alto de educación?",
          noFormalEducation: "Sin educación",
          primaryEducation: "Educación primaria",
          secondaryEducation: "Educación Secundaria",
          universityDegree: "Grado universitario",
          postGraduateUniversityDegree: "Título universitario de posgrado",
          other: "Otro",
        },
        marital: {
          title: "Cuál es tu estado civil?",
          single: "Soltera/Nunca casada",
          married: "Casada",
          divorced: "Divorciada/Apartada",
          widowed: "Viuda",
          cohabitating: "Viviendo juntos/Cohabitación",
          other: "Otro",
        },
        primaryIncome: {
          title: "¿Quién es la fuente principal de ingresos de su hogar?",
          me: "Yo",
          partner: "Mi esposo/compañero",
          parents: "Uno de mis padres",
          children: "Uno de mis hijos",
          other: "Otro",
        },
        mainlyWork: {
          title: "¿Qué haces principalmente por trabajo?",
          fullTimeRegularSalary:
            "Trabajar a tiempo completo por un salario regular",
          partTimeRegularSalary:
            "Trabajar a tiempo parcial por un salario regular",
          occasionally:
            "Trabajar ocasionalmente, salario irregular (siempre que el trabajo esté disponible)",
          perSeason:
            "Trabajo por temporada (por ejemplo, solo durante la temporada de cosecha)",
          selfEmployed: "Autónoma, trabajando para ti mismo",
          lookingFor: "No trabaja pero busca trabajo",
          housewife:
            "Ama de casa haciendo las tareas del hogar y cuidando a los niños",
          student: "Alumna de tiempo completo",
          retired: "No trabajar por jubilación",
          disability: "No trabajar por enfermedad, discapacidad, etc.",
          other: "Otro",
        },
      },
      SkillsSurvey: {
        title: "Encuesta de habilidades",
        description:
          "¡Muéstranos lo que puedes hacer! Responda algunas preguntas sencillas para ver qué carrera es la mejor para usted.",
        introduction:
          "Esta sección contiene preguntas que nos darán información sobre las habilidades y habilidades que tiene y que pueden emplearse en el mercado laboral. Tómese su tiempo y léalos atentamente, una vez que complete esto, podrá ver sus posibles trayectorias profesionales, mientras más precisas sean sus respuestas, mejores resultados obtendrá. Su información se mantiene confidencial.",
        categories: es_categories,
        beginner: "Principiante",
        intermediate: "Intermedia",
        competent: "Competente",
        proficient: "Experta",
        t1: {
          title: "1. Organización y planificación de trabajos y actividades",
          description:
            "Este apartado está relacionado con las tareas organizativas, administrativas y logísticas. \n\n¿Qué tan familiarizado está con las siguientes actividades? Piense en sus pasatiempos, tareas domésticas y experiencias laborales pasadas (si las hubiera). Califique de la siguiente manera:\n\nPrincipiante = Nunca he realizado esta actividad y no tengo ningún conocimiento relacionado.\nIntermedia = He realizado esta actividad varias veces y / o tengo algunos conocimientos básicos relacionados.\nCompetente = A veces he realizado esta actividad y tengo buenos conocimientos relacionados.\nExperta = A menudo hago esta actividad y tengo muy buenos conocimientos relacionados.\n ",
        },
        t2: {
          title: "2. Habilidades generales",
          description:
            "Esta sección se refiere a habilidades generales como trabajar en equipo, actuar como líder, pero también algunas habilidades prácticas como la limpieza.\n\n¿Qué tan familiarizado está con las siguientes actividades? Piense en sus pasatiempos, tareas domésticas y experiencias laborales pasadas (si las hubiera). Califique de la siguiente manera:\n\nPrincipiante = Nunca he realizado esta actividad y no tengo ningún conocimiento relacionado.\nIntermedia = He realizado esta actividad varias veces y / o tengo algunos conocimientos básicos relacionados.\nCompetente = A veces he realizado esta actividad y tengo buenos conocimientos relacionados.\nExperta = A menudo hago esta actividad y tengo muy buenos conocimientos relacionados.\n ",
        },
        t3: {
          title: "3. Preparar y servir comidas y bebidas",
          description:
            "Esta sección está relacionada con la comida y las bebidas y se relaciona con la preparación, el servicio y otros aspectos relacionados con la comida y la bebida.\n\n¿Qué tan familiarizado está con las siguientes actividades? Piense en sus pasatiempos, tareas domésticas y experiencias laborales pasadas (si las hubiera). Califique de la siguiente manera:\n\nPrincipiante = Nunca he realizado esta actividad y no tengo ningún conocimiento relacionado.\nIntermedia = He realizado esta actividad varias veces y / o tengo algunos conocimientos básicos relacionados.\nCompetente = A veces he realizado esta actividad y tengo buenos conocimientos relacionados.\nExperta = A menudo hago esta actividad y tengo muy buenos conocimientos relacionados.\n ",
        },
        t4: {
          title: "4. Proporcionar cuidados de belleza",
          description:
            "Esta sección está relacionada con el cuidado de la belleza e incluye el cuidado de la piel, cosméticos y cuidado del cabello.\n\n¿Qué tan familiarizado está con las siguientes actividades? Piense en sus pasatiempos, tareas domésticas y experiencias laborales pasadas (si las hubiera). Califique de la siguiente manera:\n\nPrincipiante = Nunca he realizado esta actividad y no tengo ningún conocimiento relacionado.\nIntermedia = He realizado esta actividad varias veces y / o tengo algunos conocimientos básicos relacionados.\nCompetente = A veces he realizado esta actividad y tengo buenos conocimientos relacionados.\nExperta = A menudo hago esta actividad y tengo muy buenos conocimientos relacionados.\n ",
        },
        t5: {
          title: "5. Proporcionar información y apoyo a otros.",
          description:
            "Esta sección se centra en brindar información a las personas, comprender las necesidades de los demás y mantener buenas relaciones.\n\n¿Qué tan familiarizado está con las siguientes actividades? Piense en sus pasatiempos, tareas domésticas y experiencias laborales pasadas (si las hubiera). Califique de la siguiente manera:\n\nPrincipiante = Nunca he realizado esta actividad y no tengo ningún conocimiento relacionado.\nIntermedia = He realizado esta actividad varias veces y / o tengo algunos conocimientos básicos relacionados.\nCompetente = A veces he realizado esta actividad y tengo buenos conocimientos relacionados.\nExperta = A menudo hago esta actividad y tengo muy buenos conocimientos relacionados.\n ",
        },
        t6: {
          title:
            "6. Ayudar a personas con niños, personas con necesidades especiales y personas mayores",
          description:
            "Esta sección incluye actividades para ayudar y apoyar a niños, personas con necesidades especiales y ancianos.\n\n¿Qué tan familiarizado está con las siguientes actividades? Piense en sus pasatiempos, tareas domésticas y experiencias laborales pasadas (si las hubiera). Califique de la siguiente manera:\n\nPrincipiante = Nunca he realizado esta actividad y no tengo ningún conocimiento relacionado.\nIntermedia = He realizado esta actividad varias veces y / o tengo algunos conocimientos básicos relacionados.\nCompetente = A veces he realizado esta actividad y tengo buenos conocimientos relacionados.\nExperta = A menudo hago esta actividad y tengo muy buenos conocimientos relacionados.\n ",
        },
      },
      ExperienceSurvey: {
        title: "Encuesta domestica",
        description:
          "Informarnos sobre su relación puede ayudarnos a comprender si trabajar les ayuda a usted y a otras mujeres a estar seguras.",
        submit: "Enviar",
        introduction:
          "Cuando dos personas se casan o viven juntas, por lo general comparten buenos y malos momentos. Me gustaría hacerle algunas preguntas sobre sus relaciones actuales y pasadas y cómo su esposo / pareja la trata (o la trata). Me gustaría asegurarle que sus respuestas se mantendrán en secreto y que no tendrá que responder ninguna pregunta que no desee.",
        q1: {
          title:
            "Me gustaría pedirle que me diga si en algún momento de su vida, algún esposo, pareja o expareja ha hecho alguna de las siguientes cosas:",
          first: "Negar su acceso a recursos financieros",
          second: "Negar su acceso a la propiedad y los bienes duraderos",
          third:
            "No cumplir deliberadamente con responsabilidades económicas, como la pensión alimenticia o el apoyo financiero para la familia, lo que lo expone a la pobreza y las dificultades",
          fourth: "Negarle el acceso a un trabajo y educación",
        },
        q2: {
          title:
            "Me gustaría pedirle que me diga si en algún momento de su vida, algún esposo, pareja o expareja ha hecho alguna de las siguientes cosas:",
          first: "Te insultó o te hizo sentir mal contigo misma",
          second: "Te menospreció o te humilló frente a otras personas",
          third:
            "Hizo algo a propósito para asustarlo o intimidarlo (por ejemplo, por la forma en que lo mira, grita o destruye cosas)",
          fourth:
            "Amenazado con hacerle daño a usted oa alguien importante para usted",
          fifth: "Amenazada con llevar a tus hijos",
        },
        q3: {
          title:
            "Ahora te voy a preguntar sobre situaciones que les pasan a algunas mujeres. Dígame si las siguientes declaraciones se aplican a su relación con su (último) esposo (pareja):",
          first:
            "Tu esposo (pareja) se pone celoso o enojado si hablas (ed) con otro hombre",
          second: "Con frecuencia te acusa de infiel",
          third: "Te impide visitar o recibir visitas de tus amigos",
          fourth: "Intenta limitar sus visitas / contacto con su familia",
          fifth: "Insiste en saber a donde vas en todo momento",
          sixth: "No te confía el dinero",
        },
        q4: {
          title:
            "A veces, los esposos / parejas se molestan por las cosas que hacen sus esposas. En su opinión, ¿está justificado que su esposo / pareja la golpee en las siguientes situaciones?",
          first: "Te vas de casa sin decirle",
          second: "Descuidas a los niños",
          third: "Discutes con el",
          fourth: "No quieres o te niegas a tener relaciones sexuales con él",
          fifth: "Quemas la comida",
        },
        q5: {
          title:
            "Me gustaría preguntarle si en algún momento de su vida su esposo / compañero de vida o cualquier otro compañero con quien estuvo casado o en una relación ha hecho alguna de las siguientes cosas:",
          first: "Te abofeteó o te arrojó algo que podría lastimarte",
          second: "Te empujó, te empujó o te tiró del pelo",
          third: "Te golpeó con el puño o con algo más que pudiera lastimarte",
          fourth: "Te pateó, te arrastró o te golpeó",
          fifth: "Intenté asfixiarte o quemarte a propósito",
          sixth:
            "Amenazado con usar una pistola, cuchillo u otra arma en su contra",
        },
        q6: {
          title:
            "Le gustaría que me dijera si en algún momento de su vida su esposo / compañero de vida o cualquier otro compañero con el que estuvo casado o vivió ha hecho alguna de las siguientes cosas:",
          first:
            "Te sientes obligado por miedo (a tu pareja) a tener relaciones sexuales no deseadas",
          second:
            "Usó la fuerza para hacerte tener relaciones sexuales cuando no querías o para hacerte realizar actos sexuales que no aprobaste",
        },
        q7: {
          title:
            "Por favor, dígame si le sucedió alguna de las siguientes cosas como resultado de algo que hizo su pareja (esposo):",
          first: "Tenias moretones y dolor",
          second:
            "Tuvo lesiones graves en los ojos, esguinces, dislocaciones o quemaduras",
          third:
            "Tenía heridas profundas, dientes rotos o cualquier otra lesión grave",
        },
        q8: {
          title:
            "¿Qué situaciones particulares lo vuelven violento? ¿Alguna otra situación?",
          first: "Sin motivo particular (por placer)",
          second: "Cuando está borracho o bajo la influencia de drogas",
          third: "Problemas con el dinero",
          fourth: "Problemas con su trabajo",
          fifth: "Cuando el esta desempleado",
          sixth: "Cuando no hay comida en la casa",
          seventh: "Problemas con su familia o su",
          eighth: "Cuando estas embarazada",
          ninth: "El es celoso",
          tenth: "Te niegas a tener sexo",
          eleventh: "Te desobedeces",
          twelveth: "Te quejas",
        },
        q9: {
          title:
            "Cuando esta (estas) persona (personas) lo agredió durante el año pasado, ¿a quién acudió en busca de ayuda?",
          first: "Familia",
          second: "Amigos",
          third: "Policía",
          fourth: "Líneas telefónicas de ayuda",
          fifth: "Refugios",
        },
      },
    },
    ProfileMatchings: {
      title: "Emparejamientos de trabajo",
      showLess: "Muestra Menos",
      showAll: "Mostrar Todo",
      OccupationDetails: {
        requiredSkills: "Habilidades requeridas",
        affinity: "Afinidad",
      },
    },
    ProfileSkills: {},
  },
  Organisation: {
    allCountries: "Todos los países",
    Languages: {
      all: "Todos los idiomas",
      spanish: "Español",
      portuguese: "Portugués",
      english: "Inglés",
    },
    chooseLanguage: "Elige lengua",
    chooseCountry: "Elige país",
    chooseSurvey: "Elija encuesta",
    allSurveys: "Todas las encuestas",
    readOnline: "leer en línea",
    downloadDataset: "Descargar",
  },
};
