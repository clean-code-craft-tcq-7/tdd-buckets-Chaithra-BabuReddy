import { expect } from 'chai';
import { getRangeOfCurrents } from "../currentRange.js";
describe('currentRange', () => {
    it('should return range "0" for empty array', () => {
        let res = getRangeOfCurrents([]);
        expect(res).to.include(0);
    })
    it('should return range "4-5:2" for [4,5] input range', () => {
        const mockData = [4, 5];
        let res = getRangeOfCurrents(mockData);
        expect(res).to.include("{4-5:2}");
    });
    it('should return range of values for multiple current ranges', () => {
        const mockData = [1, 2, 3, 3, 4, 7, 8, 9];
        let res = getRangeOfCurrents(mockData)
        expect(res).to.include('{1-4:5}');
        expect(res).to.include('{7-9:3}');
    });

});
