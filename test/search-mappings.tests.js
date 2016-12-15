'use strict';

const should = require('should');
const simplify = require('../index');

describe('es-simplify', function() {
    const tests = [
        { arg: 'ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů', expected: 'example aeiouycdenrstzu' },
        { arg: 'ỆᶍǍᶆṔƚÉ-áéíóúýčďěňřšťž | ů', expected: 'example aeiouycdenrstz u' },
        { arg: ' Hi    You   ', expected: 'hi you' },
        { arg: '||', expected: '||' },
        { arg: '| |  ', expected: '| |  ' },
        { arg: '', expected: '' },
        { arg: null, expected: null },
        { arg: undefined, expected: null }
    ];

    tests.map(test => {
        it(`should return ${JSON.stringify(test.expected)} when passed ${JSON.stringify(test.arg)}`, function() {
            const result = simplify(test.arg);
            should.equal(result, test.expected);
        });
    });
});