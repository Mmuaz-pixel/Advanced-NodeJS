import * as chai from "chai";
import supertest from "supertest";

const expect = chai.expect;

const request = supertest('http://localhost:8080');

describe("API testing", function () {
	it("get /user", function (done) {

		const obj = [
			{
				id: 1,
			}
		];

		request.get('/user')
			.expect(200)
			.end((err, response) => {
				if (err) return done(err);
				expect(response.body.data).to.deep.equal(obj);
				expect(response.body).to.have.key('data', 'status');
				done();
			});
	});

});
