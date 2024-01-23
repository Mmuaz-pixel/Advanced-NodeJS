const userList = (req, res) => {
	const obj = {
		status: 200, 
		data: [
			{
				id: 1, 
			}
		]
	}
	res.json(obj); 
}

module.exports = {userList}; 