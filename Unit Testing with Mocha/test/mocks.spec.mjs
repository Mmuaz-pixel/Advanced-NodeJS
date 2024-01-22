import Sinon from "sinon";

import Student from "../controllers/stdController.js";

let studentObj = new Student();

describe('Mock from Sinon', function () {
	let mock; 
	beforeEach(function(){
		mock = Sinon.mock(studentObj);
	})
	
	afterEach(function(){
		mock.restore(); 
	})

	it('count funcion', function () {
		const expct = mock.expects('decrement');
		expct.exactly(2);
		// expct.withArgs(100);
		studentObj.finalMarks(100);
		mock.verify();
	})

	it('2 calls with different args', function () {
		const expectDecrement1 = mock.expects('decrement');
		expectDecrement1.once();
		expectDecrement1.withArgs(100); 
		const expectDecrement2 = mock.expects('decrement');
		expectDecrement2.once(); 
		expectDecrement2.withArgs(99); 
		studentObj.finalMarks(100);
		mock.verify();
	})
})