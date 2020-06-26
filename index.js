(function() {
	let targets = []

	function closest(el, selector) {
		for (;el && el !== document; el = el.parentNode) {
			if (el.matches(selector))
				return el
		}

		return null
	}

	window.addEventListener('click', function(e) {
		let button = closest(e.target, 'button')

		if (!button)
			return 

		if (targets.indexOf(button) > -1) {
			e.stopPropagation()
			e.preventDefault()

			return
		}

		targets.push(button)
		setTimeout(() => targets.splice(targets.indexOf(button), 1), 350)
	}, true)
}())