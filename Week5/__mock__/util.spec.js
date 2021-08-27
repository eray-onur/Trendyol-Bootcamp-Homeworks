import { expect } from '@jest/globals';
import {divide, toPascalCase} from '../src/util';

describe("utility functions", () => {
    describe("divide()", () => {

        it("should divide correctly when parameters are valid", () => {
            const dividend = 30;
            const divisor = 3;
    
            expect(divide(dividend, divisor)).toBe(10);
        });
    
        it("should throw error when divided by 0", () => {
            const dividend = 22;
            const divisor = 0;
    
            const result = () => divide(dividend, divisor);
            expect(result).toThrow("Number cannot be divided by zero.")
        });
    
        it("should throw error when dividend is NaN", () => {
            const dividend = "NaN nonsense";
            const divisor = 2;
    
            const result = () => divide(dividend, divisor);
    
            expect(result).toThrow("Non-number values cannot be divided.")
        });
    
    });
    
    describe("toPascalCase()", () => {
        it("should turn every first character of a string into uppercase", () => {
            expect(toPascalCase("king of jungle")).toBe("King Of Jungle");
        });
    });
});

