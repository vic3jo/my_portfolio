import {combineReducers, applyMiddleware,  createStore} from 'redux';
import * as Default from './Default'
import * as ActionTypes from './ActionTypes';


const educationReducer = (state = Default.EDUCATION, action) =>{ 
	if (action.type === ActionTypes.LOAD_EDUCATION_HISTORY_DATA)
	{
		return {history: action.payload};	
	}

	return state;	
}


const academicProjectsReducer = (
	state = Default.ACADEMIC_PROJECTS,
	action
) => {

	if (action.type === ActionTypes.LOAD_ACADEMIC_PROJECTS_DATA)
	{
		return {projects: action.payload};	
	}
	return state;
}



const personalProjectsReducer = (
	state = Default.PERSONAL_PROJECTS,
	action
) => {

	if (action.type === ActionTypes.LOAD_PERSONAL_PROJECTS_DATA)
	{
		return {projects: action.payload};	
	}
	return state;
}


const aboutReducer = (
	state = Default.ABOUT,
	action
) => {

	if (action.type === ActionTypes.LOAD_ABOUT_DATA)
	{
		return {description: action.payload};	
	}
	return state;
}



const Reducers = combineReducers({
	about: aboutReducer,
	education: educationReducer,
	academicProjects: academicProjectsReducer,
	personalProjects: personalProjectsReducer
})

export default Reducers;