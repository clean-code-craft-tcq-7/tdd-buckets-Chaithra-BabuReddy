const bitConverter = require('../A2D_converter');
const currentRange = require('../currentRange');
const { expect } = require('chai');
const { assert } = require('chai');

describe('A2D_converter tests', () => {
    it('should return error message for input 4096', () => {
        const inputs = [0, 128, 256, 512, 1024, 1146, 2048, 4096];
        assert.throws(function () { bitConverter.a2dConverter(inputs, 10) }, Error, 'Error-invalid reading');
    });
    it('should return converted values', () => {
        const inputs = [0, 128, 256, 512, 700, 1024, 1146, 2048];
        let res = bitConverter.a2dConverter(inputs, 10);
        expect(res).to.eql([0, 0, 1, 1, 2, 3, 3, 5]);
    });
});

describe('integration test', () => {
    it('should return error message for input 4096', () => {
        const inputs = [0, 128, 256, 4096, 4098];
        assert.throws(function () {
            currentRange.getRangeOfCurrents(bitConverter.a2dConverter(inputs, 10))
        }, Error, 'Error-invalid reading');
    });
    it('should return converted values', () => {
        const inputs = [0, 128, 256, 512, 700, 1024, 1146, 2048];
        let res = currentRange.getRangeOfCurrents(bitConverter.a2dConverter(inputs, 10));
        expect(res).to.eql(['{0-3:7}', '{5-5:1}']);
    });
});
