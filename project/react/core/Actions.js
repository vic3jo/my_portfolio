/**
 * Author: Victor Trejo.
 * Description: This file contains all the Actions that
 *              be performed.
 */
import URLS from './URLS';
import ActionTypes from './ActionTypes';
import axios from 'axios';

const loadAndNotify = (
    store,
    url,
    successActionType,
    errorActionType = ActionTypes.ERROR_LOADING_DATA
) => {

    axios.get(url).then((response) => {

        store.dispatch({
            type: successActionType,
            payload: response.data
        });

    }).catch((response) => {

        store.dispatch({
            type: errorActionType,
            payload: response
        });

    });

};


const loadEducationData = (store) => {

    loadAndNotify(
        store,
        URLS.LOAD_EDUCATION_HISTORY_DATA,
        ActionTypes.LOAD_EDUCATION_HISTORY_DATA
    );

};


const loadExperienceData = (store) => {

    loadAndNotify(
        store,
        URLS.LOAD_EXPERIENCE_HISTORY_DATA,
        ActionTypes.LOAD_EXPERIENCE_HISTORY_DATA
    );

};

const loadAcademicProjectsData = (store) => {

    loadAndNotify(
        store,
        URLS.LOAD_ACADEMIC_PROJECTS_DATA,
        ActionTypes.LOAD_ACADEMIC_PROJECTS_DATA
    );

};


const loadPersonalProjectsData = (store) => {

    loadAndNotify(
        store,
        URLS.LOAD_PERSONAL_PROJECTS_DATA,
        ActionTypes.LOAD_PERSONAL_PROJECTS_DATA
    );

};


const loadJumbotronData = (store) => {

    loadAndNotify(
        store,
        URLS.LOAD_JUMBOTRON_DATA,
        ActionTypes.LOAD_JUMBOTRON_DATA
    );

};

const loadAboutData = (store) => {

    loadAndNotify(
        store,
        URLS.LOAD_ABOUT_DATA,
        ActionTypes.LOAD_ABOUT_DATA
    );

};


const loadSkillsData = (store) => {

    loadAndNotify(
        store,
        URLS.LOAD_SKILLS_DATA,
        ActionTypes.LOAD_SKILLS_DATA
    );

};

const loadResumeData = (store) => {

    loadAndNotify(
        store,
        URLS.LOAD_RESUME_DATA,
        ActionTypes.LOAD_RESUME_DATA
    );

};

const loadProfilePictureData = (store) => {

    loadAndNotify(
        store,
        URLS.LOAD_PROFILE_PICTURE_DATA,
        ActionTypes.LOAD_PROFILE_PICTURE_DATA
    );

};

const loadData = (store) => {

    loadJumbotronData(store);
    loadProfilePictureData(store);
    loadAboutData(store);
    loadEducationData(store);
    loadAcademicProjectsData(store);
    loadPersonalProjectsData(store);
    loadSkillsData(store);
    loadExperienceData(store);
    loadResumeData(store);

};

export default loadData;
