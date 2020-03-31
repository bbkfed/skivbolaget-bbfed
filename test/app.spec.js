const request = require('supertest');
const mainRoute = require("../src/routes/mainRoute");

describe('Using express', () => {
    
    describe("Main route testing", () => {
        it("testing main route", (done) => {
            request(mainRoute).get("/").send({}).expect(200);
            done();
        });
    });

});