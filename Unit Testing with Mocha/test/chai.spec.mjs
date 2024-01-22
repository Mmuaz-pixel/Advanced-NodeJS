import {
	assert
} from 'chai'

// chai has three methods of defining tests 
// 1) assert  
// 2) expect 
// 3) BDD 

describe('Aspect check', function () {
	let username = 'muaz';
	it('check string', function () {
		assert.typeOf(username, 'string');
	})

	it('should match', function(){
		assert.equal(username, 'muaz'); 
	})
})