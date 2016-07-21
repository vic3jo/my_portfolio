/**
 * Author: Victor Trejo.
 * Description: This file contains utilities functions used
 * through the application.
 */
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

/**
 * Formats a given date string into the 
 * {Month} {Year} format.
 * 
 * @param  {string} dateString date string to be formatted.
 * @return {string}        the formatted date string.
 */
const formattedDate =  (dateString) => {

    const date = new Date(dateString);

    return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

};

const START_INDEX = 0;

/**
 * Shortens a string if its length is longer than
 * a maximun specified length. At the end adds elipses.
 * 
 * @param  {string} text   string to be shorten.
 * @param  {number} length maximum length.
 * @return {string}        the shorten string.
 */
const shortenIfLengthLarger = (text, length) => {

    if ( text.length > length )
    {

        return  `${text.slice(START_INDEX, length)}...`;

    }
    else
    {

        return text;

    }

};


export default{
    formattedDate,
    shortenIfLengthLarger
};
