const deleteProduct = (id, callback) => {
	fetch(serverPath + 'requests/' + id, {
		method: 'DELETE'
	}).then(() => {
		console.log('Post Deleted!');
		if (typeof callback === "function") {
			callback()};
	})
}

export default deleteProduct