import {
    capitalize,
    decapitalize,
    reverse,
    truncate,
    slugify,
    camelCase,
    kebabCase,
    snakeCase,
    isPalindrome 
} from './modules/string.js'

import {
    flatten,
    groupBy,
    shuffle,
    intersection,
    difference,
    union,
    unique
} from './modules/array.js'

import {
    clone,
    merge,
    pick,
    omit,
    isEmpty
} from './modules/object.js'

import {
    formatDate,
    parseDate,
    getTimezoneOffset,
    addDays,
    subtractDays
} from './modules/date.js'

import HttpClient from './modules/http.js'

module.exports = {
    stringUtils: {
        capitalize,
        decapitalize,
        reverse,
        truncate,
        slugify,
        camelCase,
        kebabCase,
        snakeCase,
        isPalindrome
    },
    arrayUtils: {
        flatten,
        groupBy,
        shuffle,
        intersection,
        difference,
        union,
        unique
    },
    objectUtils:  {
        clone,
        merge,
        pick,
        omit,
        isEmpty
    },
    dateUtils: {
        formatDate,
        parseDate,
        getTimezoneOffset,
        addDays,
        subtractDays
    },
    HttpClient,
    
};