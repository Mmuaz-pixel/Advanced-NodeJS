import {
	assert,
	should, 
	expect
} from 'chai'

should(); // we have to call should

// chai has three methods of defining tests 
// 1) assert  
// 2) should 
// 3) expect

describe('Assert testing', function () {
	let username = 'sample';
	it('check string', function () {
		assert.typeOf(username, 'string');
	})

	it('should match', function () {
		assert.equal(username, 'sample');
	})
})

describe('Should testing', function () {
	let userName = 'username';
	let list = {
		item: [],
		title: 'userlist'
	};

	it('should be string', function () {
		userName.should.be.a('string');
	})

	it('equal check', function () {
		userName.should.equal('username');
	})

	it('length check', function () {
		userName.length.should.equal(8);
	})

	it('property check', function (){
		list.should.have.property('item').with.lengthOf(0); 
	})
}) 

describe('expect testing', function(){
	let userName = 'username';
	let list = {
		item: [
			{
				id: 1, 
				name: 'demo' 
			}, 
			{
				id: 2, 
				name: 'demo 2'
			}
		],
		title: 'userlist'
	};

	it('string match', function(){
		expect(userName).to.be.a('string'); 
	})

	it('object match', function(){
		expect(list).to.have.all.keys('title', 'item')
	})

	it('nested property match', function(){
		expect(list).to.have.nested.include({'item[0].id': 1}); 
	})
})