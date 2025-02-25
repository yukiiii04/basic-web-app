import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return Shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe(
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        );
    });

    test('should return Andrew ID response', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe("My Andrew ID is yma2");
    });

    test('should return Andrew ID response with different casing', () => {
        const query = "What's Your Andrew Id?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("My Andrew ID is yma2");
    });

    test('should return the sum of two numbers', () => {
        const query = "What is 34 plus 47?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("81");
    });

    test('should return the difference of two numbers', () => {
        const query = "What is 38 minus 45?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("-7");
    });

    test('should return the product of two numbers', () => {
        const query = "What is 71 multiplied by 78?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("5538");
    });

    test('should return the largest number from a list', () => {
        const query = "Which of the following numbers is the largest: 41, 72, 17?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("72");
    });

    test('should return the prime numbers from a list', () => {
        const query = "Which of the following numbers are primes: 68, 33, 21, 47, 83?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("47, 83");
    });

    test('should return a number that is both a square and a cube (sixth power)', () => {
        const query = "Which of the following numbers is both a square and a cube: 894, 1083, 3673, 2116, 3809, 1, 4096?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1, 4096");
    });
});
