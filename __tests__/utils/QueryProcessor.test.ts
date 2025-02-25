import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id reponse query', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My Andrew ID is " +
            "yma2"
          ));
    });

    test('should return andrew id response query', () => {
        const query = "What's Your Andrew Id?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My Andrew ID is " +
            "yma2"
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Yuki"
          ));
    })

    test('should return 171'), () => {
        const query = "what is 81 + 90?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "171"
        ))
    }
});