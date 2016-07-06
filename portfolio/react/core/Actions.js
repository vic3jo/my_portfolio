import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const LOAD_EDUCATION_HISTORY_DATA_URL = 'http://localhost:8000/education-history/';
export const LOAD_ACADEMIC_PROJECTS_DATA_URL = 'http://localhost:8000/academic-projects/';
export const LOAD_PERSONAL_PROJECTS_DATA_URL = 'http://localhost:8000/personal-projects/';
export const LOAD_ABOUT_DATA_URL = 'http://localhost:8000/about/';


const loadEducationData = (store) => {
	axios.get(LOAD_EDUCATION_HISTORY_DATA_URL).then((response)=>{
		store.dispatch({
			type: ActionTypes.LOAD_EDUCATION_HISTORY_DATA,
			payload: response.data
		});
	}).catch((response) => {
	    console.log(response);
	});
	
};


const loadAcademicProjectsData = (store) => {
	axios.get(LOAD_ACADEMIC_PROJECTS_DATA_URL).then((response)=>{
		store.dispatch({
			type: ActionTypes.LOAD_ACADEMIC_PROJECTS_DATA,
			payload: response.data
		});
	}).catch((response) => {
	    console.log(response);
	});
};


const loadPersonalProjectsData = (store) => {
	axios.get(LOAD_PERSONAL_PROJECTS_DATA_URL).then((response)=>{
		store.dispatch({
			type: ActionTypes.LOAD_PERSONAL_PROJECTS_DATA,
			payload: response.data
		});
	}).catch((response) => {
	    console.log(response);
	});
};


const loadAboutData = (store) => {
	axios.get(LOAD_ABOUT_DATA_URL).then((response)=>{
		console.log(response)
		store.dispatch({
			type: ActionTypes.LOAD_ABOUT_DATA,
			payload: response.data.description
		});
	}).catch((response) => {
	    console.log(response);
	});
};



const loadData = (store) => {
	loadAboutData(store);
	loadEducationData(store);
	loadAcademicProjectsData(store);
	loadPersonalProjectsData(store);
};

export default loadData;