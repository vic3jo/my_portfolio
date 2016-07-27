/**
 * Author: Victor Trejo.
 * Description: This file contains all the all the reducers.
 */
import ActionTypes from './ActionTypes';
import Default from './Default';
import { combineReducers } from 'redux';


const educationReducer = (state = Default.EDUCATION, action) => {
  if ( action.type === ActionTypes.LOAD_EDUCATION_HISTORY_DATA )
  {
    return {
      ...state,
      history: action.payload,
    };
  }
  return state;
};


const experienceReducer = (state = Default.EXPERIENCE, action) => {
  if (action.type === ActionTypes.LOAD_EXPERIENCE_HISTORY_DATA)
  {
    return {
      ...state,
      history: action.payload,
    };
  }
  return state;
};


const academicProjectsReducer = (
    state = Default.ACADEMIC_PROJECTS,
    action
) => {
  if ( action.type === ActionTypes.LOAD_ACADEMIC_PROJECTS_DATA )
  {
    return {
      ...state,
      projects: action.payload,
    };
  }
  return state;
};


const personalProjectsReducer = (
    state = Default.PERSONAL_PROJECTS,
    action
) => {
  if ( action.type === ActionTypes.LOAD_PERSONAL_PROJECTS_DATA )
  {
    return {
      ...state,
      projects: action.payload,
    };
  }
  return state;
};

const ABOUT_DESCRIPTION_KEY = 'about-description';

const aboutReducer = (
    state = Default.ABOUT,
    action
) => {
  if ( action.type === ActionTypes.LOAD_ABOUT_DATA )
  {
    return {
      ...state,
      description: action.payload.contents[ABOUT_DESCRIPTION_KEY].description,
    };
  }
  return state;
};

const JUMBOTRON_DESCRIPTION_KEY = 'jumbotron-description';
const JUMBOTRON_TITLE_KEY = 'jumbotron-title';
const JUMBOTRON_PHONE_KEY = 'jumbotron-phone';
const JUMBOTRON_EMAIL_KEY = 'jumbotron-email';
const JUMBOTRON_LINKED_IN_KEY = 'jumbotron-linked-in';
const JUMBOTRON_GITHUB_KEY = 'jumbotron-github';

const jumbotronReducer = (
    state = Default.JUMBOTRON,
    action
) => {
  if ( action.type === ActionTypes.LOAD_JUMBOTRON_DATA )
  {
    return {
      ...state,
      description: action.payload.contents[JUMBOTRON_DESCRIPTION_KEY].description,
      title: action.payload.contents[JUMBOTRON_TITLE_KEY].description,
      phone: action.payload.contents[JUMBOTRON_PHONE_KEY].description,
      email: action.payload.contents[JUMBOTRON_EMAIL_KEY].description,
      linkedIn: action.payload.contents[JUMBOTRON_LINKED_IN_KEY].description,
      github: action.payload.contents[JUMBOTRON_GITHUB_KEY].description,
    };
  }

  if ( action.type === ActionTypes.LOAD_PROFILE_PICTURE_DATA )
  {
    return {
      ...state,
      imageUrl: action.payload.file,
    };
  }

  return state;
};


const skillsReducer = (
    state = Default.SKILLS,
    action
) => {
  if ( action.type === ActionTypes.LOAD_SKILLS_DATA )
  {
    const result = {};
    const skills = action.payload;

    Object.keys(skills).forEach((key, index) => {
      const category = skills[key].categoryName;

      if ( !result[category] )
      {
        result[category] = [];
      }

      result[category].push(skills[key]);
    });

    return result;
  }

  return state;
};

const resumeReducer = (
    state = Default.RESUME,
    action
) => {
  if ( action.type === ActionTypes.LOAD_RESUME_DATA )
  {
    return {
      ...state,
      file: action.payload.file,
    };
  }

  return state;
};


const menuReducer = (
    state = Default.MENU_STATE,
    action
) => {
  
  if ( action.type === ActionTypes.CHANGE_MENU_STATE )
  {
    return action.payload;
  }

  return state;
};


const Reducers = combineReducers({
  about: aboutReducer,
  education: educationReducer,
  academicProjects: academicProjectsReducer,
  personalProjects: personalProjectsReducer,
  skills: skillsReducer,
  experience: experienceReducer,
  resume: resumeReducer,
  jumbotron: jumbotronReducer,
  isMenuOpened: menuReducer,
});

export default Reducers;
