const updateActiveStatusLinkc = (value) => {
	const topStatusBar = Array.from(document.querySelectorAll('a.btn.btn-light'))
	topStatusBar.forEach((link) => {
		link.classList.remove('active')
		if (link.dataset.value === value) link.classList.add('active')
	})
	
	const leftStatusBar = Array.from(document.querySelectorAll('.left-panel__navigation li a'))
	leftStatusBar.forEach((link) => {
		link.classList.remove('active')
		if (link.dataset.value === value) link.classList.add('active')
	})
}

export { updateActiveStatusLinkc }