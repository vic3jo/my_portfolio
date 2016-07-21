/**
 * Author: Victor Trejo.
 * Description: This file contains all the Actions that
 *              be performed.
 */
import URLS from './URLS';
import ActionTypes from './ActionTypes';
import axios from 'axios';

const loadAndNotify = (
    dispatch,
    url,
    successActionType,
    errorActionType = ActionTypes.ERROR_LOADING_DATA
) => {

    axios.get(url).then((response) => {

        dispatch({
            type: successActionType,
            payload: response.data
        });

    }).catch((response) => {

        dispatch({
            type: errorActionType,
            payload: response
        });

    });

};


const loadEducationData = (dispatch) => {

    loadAndNotify(
        dispatch,
        URLS.LOAD_EDUCATION_HISTORY_DATA,
        ActionTypes.LOAD_EDUCATION_HISTORY_DATA
    );

};


const loadExperienceData = (dispatch) => {

    loadAndNotify(
        dispatch,
        URLS.LOAD_EXPERIENCE_HISTORY_DATA,
        ActionTypes.LOAD_EXPERIENCE_HISTORY_DATA
    );

};

const loadAcademicProjectsData = (dispatch) => {

    loadAndNotify(
        dispatch,
        URLS.LOAD_ACADEMIC_PROJECTS_DATA,
        ActionTypes.LOAD_ACADEMIC_PROJECTS_DATA
    );

};


const loadPersonalProjectsData = (dispatch) => {

    loadAndNotify(
        dispatch,
        URLS.LOAD_PERSONAL_PROJECTS_DATA,
        ActionTypes.LOAD_PERSONAL_PROJECTS_DATA
    );

};


const loadJumbotronData = (dispatch) => {

    loadAndNotify(
        dispatch,
        URLS.LOAD_JUMBOTRON_DATA,
        ActionTypes.LOAD_JUMBOTRON_DATA
    );

};

const loadAboutData = (dispatch) => {

    loadAndNotify(
        dispatch,
        URLS.LOAD_ABOUT_DATA,
        ActionTypes.LOAD_ABOUT_DATA
    );

};


const loadSkillsData = (dispatch) => {

    loadAndNotify(
        dispatch,
        URLS.LOAD_SKILLS_DATA,
        ActionTypes.LOAD_SKILLS_DATA
    );

};

const loadResumeData = (dispatch) => {

    loadAndNotify(
        dispatch,
        URLS.LOAD_RESUME_DATA,
        ActionTypes.LOAD_RESUME_DATA
    );

};

const loadProfilePictureData = (dispatch) => {

    loadAndNotify(
        dispatch,
        URLS.LOAD_PROFILE_PICTURE_DATA,
        ActionTypes.LOAD_PROFILE_PICTURE_DATA
    );

};

const loadData = (dispatch) => {

    loadJumbotronData(dispatch);
    loadProfilePictureData(dispatch);
    loadAboutData(dispatch);
    loadEducationData(dispatch);
    loadAcademicProjectsData(dispatch);
    loadPersonalProjectsData(dispatch);
    loadSkillsData(dispatch);
    loadExperienceData(dispatch);
    loadResumeData(dispatch);

};

export default loadData;
