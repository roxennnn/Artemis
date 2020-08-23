import pt_categories from "./categories/pt_categories.js";

export default {
  back: "Volte",
  anErrorHasOccurred: "Ocorreu um erro",
  NavComponent: {
    LoginNavbar: {
      loginQuestion: "Já tem uma conta?",
      password: "Senha",
      forgotPassword: "Esqueceu a senha?",
      newHere: "Nova aqui ?",
      joinUs: "Junte-se a nós!",
    },
    LearnMore: {
      learnMore: "Saber mais",
      whatIsThisWebsite: "Que site é este?",
      howToUseIt: "Como usar nosso site",
      whatAndWhyOfThisDatabase: "O que e por que esse banco de dados?",
      useOfBlockchain: "Uso de blockchain",
      technicalDocumentation: "Documentação técnica",
    },
    contactUs: "Contate-Nos",
  },
  LandingPage: {
    learnMore: "Saber mais",
  },
  SignupPage: {
    registerForFree: "Cadastre-se gratuitamente!",
    areYouA: "Você é um ... ?",
    citizen: "Cidadã",
    organisation: "Organização",
    notAWoman: "Não é mulher?",
    notAnOrganisation: "Não é uma organização?",
    signupQuestion: "Não tem uma conta ainda? Cadastre-se gratuitamente!",
    citizenSignUp: "Registro de Mulher",
    organisationSignUp: "Registro de Organização",
    organisationName: "Nome da organização",
    enterOrganisationName: "Insira o nome da organização",
    enterYourUsername: "Digite seu username",
    emailAddress: "Endereço de email",
    enterYourEmailAddress: "Insira o seu endereço de email",
    invalidEmail: "Não é um endereço de e-mail válido.",
    confirmEmailAddress: "Confirme o endereço de e-mail",
    reEnterYourEmailAddress: "Digite novamente o seu endereço de e-mail",
    emailsDontMatch: "Os endereços de e-mail não coincidem.",
    password: "Senha",
    passwordLength: "A senha deve ter pelo menos 8 caracteres.",
    confirmPassword: "Confirme a Senha",
    passwordsDontMatch: "As senhas não coincidem.",
    neverShare: "Nunca compartilharemos suas informações pessoais com ninguém.",
    agreeTo: "Concorde com os",
    terms: "termos",
    and: "e",
    conditions: "condições",
    youMustAgree: "Você deve concordar antes de enviar.",
    register: "Registro",
  },
  ProfileListings: {
    profile: "Perfil",
    messages: "Mensagens",
    occupations: "Ocupações",
    skills: "Habilidades",
    settings: "Configurações",
  },
  Profile: {
    manageProfile: "Gerenciar Perfil",
    surveysCompleted: "Pesquisas concluídas:",
    changeAvatar: "Mudar avatar",
    ProfileIntro: {
      goToSurveys: "Ir para pesquisas",
      topMatching: "Melhores correspondências:",
    },
    ProfileSurveys: {
      takeSurvey: "Fazer pesquisa",
      resetAnswers: "Respostas redefinidas",
      retakeSurvey: "Retomar pesquisa",
      lastAccess: "Último acesso:",
      youMustAnswerToThisQuestion: "Você deve responder a esta pergunta!",
      youMustAnswerToAllTheQuestions:
        "Você deve responder a todas as perguntas!",
      DemographicsSurvey: {
        title: "Pesquisa demográfico",
        description:
          "Compartilhar conosco algumas de suas informações pessoais nos ajudará a criar o seu perfil e a conhecê-lo melhor.",
        introduction:
          "Ao preencher esta seção, você nos ajudará a criar seu perfil e a entender sua experiência. Isso é muito importante porque vai contribuir ainda mais para encontrar o emprego certo para você, adequado para sua idade, horário de localização, etc. Suas informações são mantidas em sigilo.",
        howOldAreYou: "Quantos anos você tem?",
        selectYourAge: "Selecione sua idade",
        younger: "17 ou mais jovem",
        older: "65 ou mais",
        whereAreYouFrom: "De onde você é?",
        weddingAge: "Quantos anos você tinha quando se casou?",
        selectTheAge: "Selecione a idade",
        selectCountry: "Selecione um pais",
        selectARegion: "Selecione uma região",
        submit: "Enviar",
        transportation: {
          title: "Meios de transporte disponíveis:",
          bike: "Bicicleta",
          car: "Carro",
          bus: "Ônibus/Eléctrico",
          train: "Trem",
          scooter: "Lambreta/Motocicleta",
          other: "Outro",
        },
        education: {
          title: "Qual o seu maior nível de escolaridade?",
          noFormalEducation: "Sem educação",
          primaryEducation: "Educação primária",
          secondaryEducation: "Educação secundária",
          universityDegree: "Diploma",
          postGraduateUniversityDegree: "Pós-graduação universitária",
          other: "Outro",
        },
        marital: {
          title: "Qual é seu estado civil?",
          single: "Solteira/Nunca casou",
          married: "Casada",
          divorced: "Divorciada/Separadas",
          widowed: "Viúva",
          cohabitating: "Vivendo juntos/Coabitação",
          other: "Outro",
        },
        primaryIncome: {
          title: "Quem é a principal fonte de renda de sua família?",
          me: "Eu",
          partner: "Meu marido/parceiro",
          parents: "Um dos meus pais",
          children: "Um dos meus filhos",
          other: "Outro",
        },
        mainlyWork: {
          title: "O que você faz principalmente no trabalho?",
          fullTimeRegularSalary:
            "Trabalhar em tempo integral por um salário normal",
          partTimeRegularSalary:
            "Trabalhando meio período por um salário normal",
          occasionally:
            "Trabalho ocasional, remuneração irregular (sempre que houver trabalho disponível)",
          perSeason:
            "Trabalho por temporada (por exemplo, apenas durante a temporada de colheita)",
          selfEmployed: "Autônomo, trabalhando por conta própria",
          lookingFor: "Não trabalhando, mas procurando um emprego",
          housewife:
            "Dona de casa fazendo tarefas domésticas e cuidando dos filhos",
          student: "Estudante em tempo integral",
          retired: "Não trabalhando por causa da aposentadoria",
          disability: "Não trabalhar por causa de doença, deficiência, etc.",
          other: "Outro",
        },
      },
      SkillsSurvey: {
        title: "Pesquisa de habilidades",
        description:
          "¡Muéstranos lo que puedes hacer! Responda algunas preguntas sencillas para ver qué carrera es la mejor para usted.",
        introduction:
          "Esta seção contém perguntas que nos darão informações sobre as competências e habilidades que você possui e que podem ser empregadas no mercado de trabalho. Por favor, tome o seu tempo e leia com atenção, uma vez que você completar isto, você ainda poderá ver seus possíveis caminhos de carreira, quanto mais precisas suas respostas, melhores resultados você obterá. Suas informações são mantidas confidenciais.",
        categories: pt_categories,
        beginner: "Principiante",
        intermediate: "Intermedia",
        competent: "Competente",
        proficient: "Experta",
        t1: {
          title: "1. Organização e planejamento de trabalhos e atividades",
          description:
            "Esta seção está relacionada a tarefas organizacionais, administrativas e logísticas.\n\nVocê está familiarizado com as seguintes atividades? Pense em seus hobbies, tarefas domésticas e experiências anteriores de trabalho (se houver). Classifique da seguinte forma:\n\nPrincipiante = Nunca fiz essa atividade e não tenho nenhum conhecimento relacionado.\nIntermedia = Já fiz esta atividade algumas vezes e / ou tenho algum conhecimento básico relacionado.\nCompetente = Já fiz esta atividade algumas vezes e tenho bons conhecimentos relacionados.\nExperta = Costumo fazer esta atividade e tenho um conhecimento muito bom relacionado.\n ",
        },
        t2: {
          title: "2. Habilidades gerais",
          description:
            "Esta seção se refere a habilidades gerais, como trabalhar em equipe, atuar como líder, mas também algumas habilidades práticas, como limpeza.\n\nVocê está familiarizado com as seguintes atividades? Pense em seus hobbies, tarefas domésticas e experiências anteriores de trabalho (se houver). Classifique da seguinte forma:\n\nPrincipiante = Nunca fiz essa atividade e não tenho nenhum conhecimento relacionado.\nIntermedia = Já fiz esta atividade algumas vezes e / ou tenho algum conhecimento básico relacionado.\nCompetente = Já fiz esta atividade algumas vezes e tenho bons conhecimentos relacionados.\nExperta = Costumo fazer esta atividade e tenho um conhecimento muito bom relacionado.\n ",
        },
        t3: {
          title: "3. Preparar e servir comidas e bebidas",
          description:
            "Esta seção está relacionada a alimentos e bebidas e a preparar, servir e outros aspectos relacionados a alimentos e bebidas.\n\nVocê está familiarizado com as seguintes atividades? Pense em seus hobbies, tarefas domésticas e experiências anteriores de trabalho (se houver). Classifique da seguinte forma:\n\nPrincipiante = Nunca fiz essa atividade e não tenho nenhum conhecimento relacionado.\nIntermedia = Já fiz esta atividade algumas vezes e / ou tenho algum conhecimento básico relacionado.\nCompetente = Já fiz esta atividade algumas vezes e tenho bons conhecimentos relacionados.\nExperta = Costumo fazer esta atividade e tenho um conhecimento muito bom relacionado.\n ",
        },
        t4: {
          title: "4. Fornece cuidados de beleza",
          description:
            "Esta seção está relacionada a cuidados de beleza e inclui cuidados com a pele, cosméticos e cabelos.\n\nVocê está familiarizado com as seguintes atividades? Pense em seus hobbies, tarefas domésticas e experiências anteriores de trabalho (se houver). Classifique da seguinte forma:\n\nPrincipiante = Nunca fiz essa atividade e não tenho nenhum conhecimento relacionado.\nIntermedia = Já fiz esta atividade algumas vezes e / ou tenho algum conhecimento básico relacionado.\nCompetente = Já fiz esta atividade algumas vezes e tenho bons conhecimentos relacionados.\nExperta = Costumo fazer esta atividade e tenho um conhecimento muito bom relacionado.\n ",
        },
        t5: {
          title: "5. Fornecer informações e apoio a outros",
          description:
            "Esta seção se concentra em fornecer informações às pessoas, entender as necessidades dos outros e manter boas relações.\n\nVocê está familiarizado com as seguintes atividades? Pense em seus hobbies, tarefas domésticas e experiências anteriores de trabalho (se houver). Classifique da seguinte forma:\n\nPrincipiante = Nunca fiz essa atividade e não tenho nenhum conhecimento relacionado.\nIntermedia = Já fiz esta atividade algumas vezes e / ou tenho algum conhecimento básico relacionado.\nCompetente = Já fiz esta atividade algumas vezes e tenho bons conhecimentos relacionados.\nExperta = Costumo fazer esta atividade e tenho um conhecimento muito bom relacionado.\n ",
        },
        t6: {
          title:
            "6. Assistir pessoas com crianças, pessoas com necessidades especiais e idosos",
          description:
            "Esta seção inclui atividades para ajudar e apoiar crianças, pessoas com necessidades especiais e idosos.\n\nVocê está familiarizado com as seguintes atividades? Pense em seus hobbies, tarefas domésticas e experiências anteriores de trabalho (se houver). Classifique da seguinte forma:\n\nPrincipiante = Nunca fiz essa atividade e não tenho nenhum conhecimento relacionado.\nIntermedia = Já fiz esta atividade algumas vezes e / ou tenho algum conhecimento básico relacionado.\nCompetente = Já fiz esta atividade algumas vezes e tenho bons conhecimentos relacionados.\nExperta = Costumo fazer esta atividade e tenho um conhecimento muito bom relacionado.\n ",
        },
      },
      ExperienceSurvey: {
        title: "Sobre sua experiência",
        description:
          "Contar-nos sobre seu relacionamento pode nos ajudar a entender se trabalhar está ajudando você a estar seguro.",
        submit: "Enviar",
        introduction:
          "Quando duas pessoas se casam ou vivem juntas, geralmente compartilham bons e maus momentos. Gostaria de fazer algumas perguntas sobre seus relacionamentos atuais e passados e como seu marido / parceiro a trata (ou tratou). Gostaria de lhe assegurar que as suas respostas serão mantidas em segredo e que não tem de responder a perguntas que não queira.",
        q1: {
          title:
            "Gostaria de lhe pedir que me diga se em algum momento de sua vida, algum marido, parceiro ou ex-parceiro fez alguma das seguintes coisas:",
          first: "Negar seu acesso a recursos financeiros",
          second: "Negar seu acesso a bens e bens duráveis",
          third:
            "Deliberadamente não cumprir com responsabilidades econômicas, tais como pensão alimentícia ou apoio financeiro para a família, expondo você à pobreza e adversidades",
          fourth: "Negar seu acesso a um emprego e educação",
        },
        q2: {
          title:
            "Gostaria de lhe pedir que me diga se em algum momento de sua vida, algum marido, parceiro ou ex-parceiro fez alguma das seguintes coisas:",
          first: "Insultou você ou fez você se sentir mal consigo mesmo",
          second: "Menosprezou ou humilhou você na frente de outras pessoas",
          third:
            "Fez algo com o propósito de assustar ou intimidar você (por exemplo, pela forma como ele olha para você, grita ou destrói coisas)",
          fourth: "Ameaçou prejudicar você ou alguém importante para você",
          fifth: "Ameaçou tirar seus filhos",
        },
        q3: {
          title:
            "Agora vou perguntar sobre situações que acontecem com algumas mulheres. Diga-me se as seguintes afirmações se aplicam ao seu relacionamento com o seu (último) marido (parceiro):",
          first:
            "Seu marido (parceiro) fica com ciúmes ou zangado se você falar (ed) com outro homem",
          second: "Ele frequentemente acusa você de ser infiel",
          third: "Ele o impede de visitar ou receber visitas de seus amigos",
          fourth: "Ele tenta limitar suas visitas / contato com sua família",
          fifth: "Ele insiste em saber para onde você vai (foi) o tempo todo",
          sixth: "Ele não confia em você com dinheiro",
        },
        q4: {
          title:
            "Às vezes, os maridos / parceiros ficam chateados com as coisas que suas esposas fazem. Na sua opinião, é justificado o seu marido / companheiro bater em você nas seguintes situações:",
          first: "Você sai de casa sem dizer a ele",
          second: "Você negligencia os filhos",
          third: "Voce discute com ele",
          fourth: "Você não quer / se recusa a ter relações sexuais com ele",
          fifth: "Você queima a comida",
        },
        q5: {
          title:
            "Gostaria de perguntar se em algum momento de sua vida o seu marido / parceiro de vida ou qualquer outro parceiro com quem você foi casada ou em um relacionamento já fez alguma das seguintes coisas:",
          first:
            "Deu um tapa em você ou jogou algo em você que poderia te machucar",
          second: "Empurrou, empurrou ou puxou seu cabelo",
          third:
            "Bateu em você com o punho ou com outra coisa que poderia te machucar",
          fourth: "Chutou você, arrastou ou espancou você",
          fifth: "Tentei sufocar ou queimar você de propósito",
          sixth: "Ameaçado de usar uma arma, faca ou outra arma contra você",
        },
        q6: {
          title:
            "Gostaria que você me dissesse se em algum momento de sua vida seu marido / parceiro de vida ou qualquer outro parceiro com quem você foi casada ou com quem viveu fez alguma das seguintes coisas:",
          first:
            "Você se sente forçado por causa do medo (de seu parceiro) de ter relações sexuais indesejadas",
          second:
            "Ele usou a força para fazer você ter relações sexuais quando você não queria ou para fazer você praticar atos sexuais que você não aprovava",
        },
        q7: {
          title:
            "Diga-me se alguma das coisas a seguir aconteceu com você como resultado de algo que seu parceiro (marido) fez:",
          first: "Você teve hematomas e dor",
          second:
            "Você teve ferimentos graves nos olhos, entorses, luxações ou queimaduras",
          third:
            "Você teve feridas profundas, dentes quebrados ou qualquer outra lesão grave",
        },
        q8: {
          title:
            "Que situações particulares o tornam / tornam violento? Qualquer outra situação?",
          first: "Nenhum motivo particular (para prazer)",
          second: "Quando ele está bêbado ou sob a influência de drogas",
          third: "Problemas com dinheiro",
          fourth: "Problemas com o trabalho dele",
          fifth: "Quando ele está desempregado",
          sixth: "Quando não há comida em casa",
          seventh: "Problemas com sua família ou a dele",
          eighth: "Quando voce esta gravida",
          ninth: "Ele está com inveja",
          tenth: "Você se recusa a fazer sexo",
          eleventh: "Voce desobedece",
          twelveth: "Você reclama",
        },
        q9: {
          title:
            "Quando essa (essas) pessoa (pessoas) agrediu você durante o ano passado, a quem você pediu ajuda?",
          first: "Família",
          second: "Amigos",
          third: "Polícia",
          fourth: "Linhas telefônicas de atendimento",
          fifth: "Abrigos",
        },
      },
    },
    ProfileMatchings: {
      title: "Correspondência de trabalho",
      showLess: "Mostre Menos",
      showAll: "Mostre Tudo",
      OccupationDetails: {
        requiredSkills: "Habilidades necessárias",
        affinity: "Afinidade",
      },
    },
    ProfileSkills: {},
  },
  Organisation: {
    allCountries: "Todos os países",
    Languages: {
      all: "Todas as línguas",
      spanish: "Espanhol",
      portuguese: "Português",
      english: "Inglês",
    },
    chooseLanguage: "Escolha o seu idioma",
    chooseCountry: "Escolha o país",
    chooseSurvey: "Escolha a pesquisa",
    allSurveys: "Todas as pesquisas",
    readOnline: "Leia online",
    downloadDataset: "Baixar conjunto de dados",
  },
};
