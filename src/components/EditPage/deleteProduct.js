const deleteProduct = (id, callback) => {
	fetch('http://localhost:8000/requests/' + id, {
		method: 'DELETE'
	}).then(() => {
		console.log('Post Deleted!');
		if (typeof callback === "function") {
			callback()};
	})
}

export default deleteProduct