/**
 * Author: Victor Trejo.
 * Description: This file contains all the all the reducers.
 */
import ActionTypes from './ActionTypes';
import Default from './Default';
import {combineReducers,  createStore} from 'redux';


const educationReducer = (state = Default.EDUCATION, action) => {

    if ( action.type === ActionTypes.LOAD_EDUCATION_HISTORY_DATA )
    {

        return {
            ...state, 
            history: action.payload
        };

    }

    return state;

};


const experienceReducer = (state = Default.EXPERIENCE, action) => {

    if (action.type === ActionTypes.LOAD_EXPERIENCE_HISTORY_DATA)
    {

        return {
            ...state,
            history: action.payload
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
            projects: action.payload
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
            projects: action.payload
        };

    }

    return state;

};


const aboutReducer = (
    state = Default.ABOUT,
    action
) => {

    if ( action.type === ActionTypes.LOAD_ABOUT_DATA )
    {

        return {
            ...state,
            description: action.payload.description
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

        return {
            ...state,
            list: action.payload
        };

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
            file: action.payload.file
        };

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
    resume: resumeReducer
});

export default Reducers;
