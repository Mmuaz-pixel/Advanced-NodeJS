// spy is used to observe the behaviour of a function e.g., how many times it was called, what arguments it recieved etc 

import Sinon from "sinon";
import {
	assert,
	expect,
	should
} from 'chai'

should();

import Student from "../controllers/stdController.js";

let student = new Student();

describe('function return check', function () {
	let spy;
	beforeEach(function () {
		spy = Sinon.spy(student, 'getInfo');
	});

	afterEach(function () {
		spy.restore(); // Restore the original method after each test
	});

	it('user id check', function () {
		expect(student.home()).to.be.equal(10);
	})

	it('function count', function () {
		student.home('h');
		expect(spy.calledOnce).to.be.true
		// get info function is called only once when home function is called
	})

	it('function argument check', function () {
		student.home('h');
		expect(spy.calledWith('h', 1)).to.be.true

	})
})