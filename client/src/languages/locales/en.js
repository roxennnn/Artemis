import en_categories from "./categories/en_categories";

export default {
  back: "Back",
  anErrorHasOccurred: "An error has occured",
  NavComponent: {
    LoginNavbar: {
      loginQuestion: "Already have an account?",
      password: "Password",
      forgotPassword: "Forgot the password?",
      newHere: "New here ?",
      joinUs: "Join us!",
    },
    LearnMore: {
      learnMore: "Learn More",
      whatIsThisWebsite: "What is this website?",
      howToUseIt: "How to use our website",
      whatAndWhyOfThisDatabase: "What and why of this database?",
      useOfBlockchain: "Use of blockchain",
      technicalDocumentation: "Technical documentation",
    },
    contactUs: "Contact Us",
  },
  SignupPage: {
    registerForFree: "Register for free!",
    areYouA: "Are you a ... ?",
    citizen: "Citizen",
    organisation: "Organisation",
    CitizenSignUp: {
      citizenSignUp: "Citizen Registration",
      enterYourUsername: "Enter your username",
      emailAddress: "Email address",
      enterYourEmailAddress: "Enter your email address",
      invalidEmail: "Not a valid email address.",
      confirmEmailAddress: "Confirm email address",
      reEnterYourEmailAddress: "Re-enter your email address",
      emailsDontMatch: "Email addresses do not match.",
      password: "Password",
      passwordLength: "The password should be at least 8 characters long.",
      confirmPassword: "Confirm password",
      passwordsDontMatch: "Passwords do not match.",
      neverShare:
        "We'll never share your personal information with anyone else.",
      agreeTo: "Agree to",
      terms: "terms",
      and: "and",
      conditions: "conditions",
      youMustAgree: "You must agree before submitting.",
      register: "Register",
    },
  },
  ProfileListings: {
    profile: "Profile",
    surveys: "Surveys",
    jobMatchings: "Job matchings",
    mySkills: "My skills",
    settings: "Settings",
    summary: "Summary",
  },
  Profile: {
    manageProfile: "Manage Profile",
    surveysCompleted: "Surveys completed:",
    ProfileIntro: {
      goToSurveys: "Go to surveys",
      topMatching: "Top matching:",
    },
    ProfileSurveys: {
      demographics: "Demographics",
      yourSkills: "Your Skills",
      yourExperience: "Your Experience",
      takenAt: "Taken at",
      youMustAnswerToThisQuestion: "You must answer to this question!",
      DemographicsSurvey: {
        title: "Demographic survey",
        howOldAreYou: "How old are you?",
        selectYourAge: "Select your age",
        younger: "17 or younger",
        older: "65 or older",
        whereAreYouFrom: "Where are you from?",
        weddingAge: "How old were you when you got married?",
        selectTheAge: "Select the age",
        selectCountry: "Select a country",
        selectARegion: "Select a region",
        submit: "Submit",
        transportation: {
          title: "Means of transport available:",
          bike: "Bike",
          car: "Car",
          bus: "Bus/Tram",
          train: "Train",
          scooter: "Scooter/Motorbike",
          other: "Other",
        },
        education: {
          title: "What is your highest level of education?",
          noFormalEducation: "No formal education",
          primaryEducation: "Primary education",
          secondaryEducation: "Secondary education",
          universityDegree: "University degree",
          postGraduateUniversityDegree: "Post-graduate university degree",
          other: "Other",
        },
        marital: {
          title: "What is your marital status?",
          single: "Single/Never married",
          married: "Married",
          divorced: "Divorced/Separated",
          widowed: "Widowed",
          cohabitating: "Living together/Cohabitation",
          other: "Other",
        },
        primaryIncome: {
          title: "Who is the primary income earner of your household?",
          me: "Me",
          partner: "My husband/partner",
          parents: "One of my parents",
          children: "One of my children",
          other: "Other",
        },
        mainlyWork: {
          title: "What do you mainly do for work?",
          fullTimeRegularSalary: "Working full-time for a regular salary",
          partTimeRegularSalary: "Working part-time for a regular salary",
          occasionally:
            "Working occasionally, irregular pay (whenever the work is available)",
          perSeason:
            "Working per season (e.g., only during the harvest season)",
          selfEmployed: "Self-employed, working for yourself",
          lookingFor: "Not working but looking for a job",
          housewife:
            "Housewife doing household chores and taking care of children",
          student: "Full-time student",
          retired: "Not working because of retirement",
          disability: "Not working because of sickness, disability, etc.",
          other: "Other",
        },
      },
      SkillsSurvey: {
        title: "Skills survey",
        categories: en_categories,
        beginner: "Beginner",
        intermediate: "Intermediate",
        competent: "Competent",
        proficient: "Proficient",
        t1: {
          title: "1. Organising and planning work and activities",
          description:
            "This section is related to organisational, administrative and logistical tasks. \n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\n\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ",
        },
        t2: {
          title: "2. General skills",
          description:
            "This section relates to general skills such as working in a team, acting as a leader but also some practical skills such as cleaning.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\n\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ",
        },
        t3: {
          title: "3. Preparing and serving food and drinks",
          description:
            "This section is related to food and drinks and relates to preparing, serving, and other aspects related to food and drink.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\n\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ",
        },
        t4: {
          title: "4. Provide beauty care",
          description:
            "This section is related to beauty care, and includes skin care, cosmetics and hair care.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\n\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ",
        },
        t5: {
          title: "5. Providing information and support to others",
          description:
            "This section focuses on providing information to people, understanding others’ needs and maintaining good relations.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\n\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ",
        },
        t6: {
          title:
            "6. Assist people with children, people with special needs and elderly",
          description:
            "This section includes activities to help and support children, people with special needs and elderly.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\n\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ",
        },
      },
      ExperienceSurvey: {
        title: "About your experience",
        submit: "Submit",
        introduction:
          "When two people marry or live together, they usually share both good and bad moments. I would like to ask you some questions about your current and past relationships and how your husband/partner treats (or treated) you. I would like to assure you that your answers will be kept secret and that you do not have to answer any questions that you do not want to.",
        q1: {
          title:
            "I would like to ask you to tell me whether at any time in your life, any husband, partner or ex-partner has done any of the following things:",
          first: "Deny your access to financial resources",
          second: "Deny your access to property and durable goods",
          third:
            "Deliberately not comply with economic responsibilities, such as alimony or financial support for the family, exposing you to poverty and hardship",
          fourth: "Deny your access a job and education",
        },
        q2: {
          title:
            "I would like to ask you to tell me whether at any time in your life, any husband, partner or ex-partner has done any of the following things:",
          first: "Insulted you or made you feel bad about yourself",
          second: "Belittled or humiliated you in front of other people",
          third:
            "Done something on purpose to scare or intimidate you (for example, by the way he looks at you, yells, or destroys things)",
          fourth: "Threatened to harm you or someone important to you",
          fifth: "Threatened to take away your children",
        },
        q3: {
          title:
            "Now I am going to ask you about situations that happen to some women. Please tell me whether the following statements apply to your relationship with your (last) husband (partner):",
          first:
            "Your husband (partner) gets jealous or mad if you talk(ed) with another man",
          second: "He frequently accuses you of being unfaithful",
          third:
            "He prevents you from visiting or receiving visits by your friends",
          fourth: "He tries to limit your visits/contact with your family",
          fifth: "He insists on knowing where you go (went) at all times",
          sixth: "He does not trust you with money",
        },
        q4: {
          title:
            "Sometimes husbands/partners get upset by the things that their wives do. In your opinion, is it justified for your husband/partner to beat you in the following situations:",
          first: "You leave the house without telling him",
          second: "You neglect the children",
          third: "You argue with him",
          fourth: "You don’t want/refuse to have sexual intercourse with him",
          fifth: "You burn the food",
        },
        q5: {
          title:
            "I would like to ask you if at any time in your life your husband/life partner or any other partner with whom you were married or in a relationship with has ever done any of the following things:",
          first: "Slapped you or threw something at you that could hurt you",
          second: "Pushed you, shoved you or pulled your hair",
          third:
            "Hit you with his fist or with something else that could hurt you",
          fourth: "Kicked you, dragged you or beat you up",
          fifth: "Tried to choke or burn you on purpose",
          sixth:
            "Threatened to use a gun, knife, or another weapon against you",
        },
        q6: {
          title:
            "Would like you to tell me whether at any time in your life your husband/life partner or any other partner that you were married to or lived with has done any of the following things:",
          first:
            "You feel forced because of fear (of your partner) to have unwanted sexual intercourse",
          second:
            "He used force to make you have sexual intercourse when you did not want to or make you perform sex acts that you did not approve of",
        },
        q7: {
          title:
            "Please tell me whether any of the following things happened to you as a result of something that your partner (husband) did:",
          first: "You had bruises and pain",
          second:
            "You had serious injuries to your eyes, sprains, dislocations, or burns",
          third:
            "You had deep wounds, broken teeth, or any other serious injury",
        },
        q8: {
          title:
            "What particular situations make/made him violent? Any other situation?",
          first: "No particular reason (for pleasure)",
          second: "When he is drunk or under the influence of drugs",
          third: "Problems with money",
          fourth: "Problems with his work",
          fifth: "When he is unemployed",
          sixth: "When there is no food in the house",
          seventh: "Problems with your  family or his",
          eighth: "When you are pregnant",
          ninth: "He is jealous",
          tenth: "You refuse to have sex",
          eleventh: "You disobey",
          twelveth: "You complain",
        },
        q9: {
          title:
            "When this (these) person (people) assaulted you during the past year, to whom did you go for help?",
          first: "Family",
          second: "Friends",
          third: "Police",
          fourth: "Telephone help lines",
          fifth: "Shelters",
        },
      },
    },
    ProfileMatchings: {
      title: "Job matchings",
      showLess: "Show Less",
      showAll: "Show All",
      OccupationDetails: {
        requiredSkills: "Required skills",
        affinity: "Affinity"
      }
    },
    ProfileSkills: {},
  },
};
