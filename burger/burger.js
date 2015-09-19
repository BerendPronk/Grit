var menu = document.getElementById('menu');
var menuToggle = document.getElementById('menutoggle');

menuToggle.addEventListener('click', function() {
	if (menu.className == 'closed') {
		menu.className = '';
	} else {
		menu.className = 'closed';
	}
});