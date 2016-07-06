import * as ActionTypes from './ActionTypes';
import * as URLS from './URLS';
import axios from 'axios';


const loadEducationData = (store) => {
	axios.get(URLS.LOAD_EDUCATION_HISTORY_DATA).then((response)=>{
		store.dispatch({
			type: ActionTypes.LOAD_EDUCATION_HISTORY_DATA,
			payload: response.data
		});
	}).catch((response) => {
	    store.dispatch({
			type: ActionTypes.ERROR_LOADING_DATA,
			payload: response
		});
	});
	
};


const loadAcademicProjectsData = (store) => {
	axios.get(URLS.LOAD_ACADEMIC_PROJECTS_DATA).then((response)=>{
		store.dispatch({
			type: ActionTypes.LOAD_ACADEMIC_PROJECTS_DATA,
			payload: response.data
		});
	}).catch((response) => {
	    store.dispatch({
			type: ActionTypes.ERROR_LOADING_DATA,
			payload: response
		});
	});
};


const loadPersonalProjectsData = (store) => {
	axios.get(URLS.LOAD_PERSONAL_PROJECTS_DATA).then((response)=>{
		store.dispatch({
			type: ActionTypes.LOAD_PERSONAL_PROJECTS_DATA,
			payload: response.data
		});
	}).catch((response) => {
	    store.dispatch({
			type: ActionTypes.ERROR_LOADING_DATA,
			payload: response
		});
	});
};


const loadAboutData = (store) => {
	axios.get(URLS.LOAD_ABOUT_DATA).then((response)=>{
		store.dispatch({
			type: ActionTypes.LOAD_ABOUT_DATA,
			payload: response.data.description
		});
	}).catch((response) => {
	    store.dispatch({
			type: ActionTypes.ERROR_LOADING_DATA,
			payload: response
		});
	});
};



const loadData = (store) => {
	loadAboutData(store);
	loadEducationData(store);
	loadAcademicProjectsData(store);
	loadPersonalProjectsData(store);
};

export default loadData;