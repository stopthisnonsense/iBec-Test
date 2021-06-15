let dataToggle = document.querySelectorAll('[data-toggle]');
[...dataToggle].forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		let target = document.querySelector(item.getAttribute('data-target'));
		target.classList.toggle('active');
		item.classList.toggle('toggled');
		console.log(target);
	});
});
