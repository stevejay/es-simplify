'use strict';

const latinize = require('latinize');

const NOT_SIMPLE_ALPHANUM_REGEX = /[^a-z0-9]/g;
const RUNS_OF_WHITESPACE_REGEX = /\s+/g;

module.exports = exports = function(term) {
    const result = latinize(term || '')
        .toLowerCase()
        .replace(NOT_SIMPLE_ALPHANUM_REGEX, ' ')
        .replace(RUNS_OF_WHITESPACE_REGEX, ' ')
        .trim();

    return result ?
        result :
        (term ? term.toLowerCase() : term);
};
