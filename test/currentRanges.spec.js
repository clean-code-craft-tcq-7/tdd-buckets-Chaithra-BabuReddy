import { expect } from 'chai';
import { getRangeOfCurrents } from "./currentRange.js";
describe('currentRange', () => {
    it('should return range as 2 for 2 inputs', () => {
        const mockData = [4, 5];
        let res = getRangeOfCurrents(mockData);
        expect(res).to.include("4-5:2");
    });
    it('should return range of values for multiple current ranges', () => {
        const mockData = [1, 2, 3, 3, 4, 7, 8, 9];
        let res = getRangeOfCurrents(mockData)
        expect(res).to.include('1-4:5');
        expect(res).to.include('7-9:3')
    });

});