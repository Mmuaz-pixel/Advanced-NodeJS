import chaiAsPromised from 'chai-as-promised';

import * as chai from 'chai'
const expect = chai.expect;

chai.use(chaiAsPromised);

import Student from "../controllers/stdController.js";

let studentObj = new Student();

describe('Testing for promises', function () {

	it('.then method', function (done) {

		this.timeout(0); // wait for doesn't matter how much time the fetch takes 

		studentObj.fetchData().then(function (result) {
			expect(result).to.be.equal(10)
			done(); // to check time taken
		});

	})

	it('chai method', function () {

		this.timeout(0)
		// return is for same purpose to check time
		return expect(studentObj.fetchData()).to.eventually.equal(10);
	})
})