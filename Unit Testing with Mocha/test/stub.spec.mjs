// stub is a tool that is used to define the function behaviour e.g., set a function's return value and test it. 

import Sinon from "sinon";
import {
	expect
} from 'chai'

import Student from "../controllers/stdController.js";

let studentObj = new Student(); 

describe('Stub in sinon', function(){
	let stub; 

	beforeEach(function(){	
		stub = Sinon.stub(studentObj, 'decrement'); 
	})

	afterEach(function(){
		stub.restore(); 
	})

	it('total check', function(){
		
		stub.withArgs(10).returns(5); 
		expect(studentObj.finalMarks(10)).to.be.equal(16)
	})
})