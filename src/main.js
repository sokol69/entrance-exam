var checklist = document.querySelectorAll('.complete'),
	finish = document.querySelector('#finish'),
	cli = document.querySelectorAll('.courses__list_item');

for (var i = 0; i < checklist.length; i++) {
	checklist[i].addEventListener('click', function() {
		var parent = this.parentNode,
			grandParent = parent.parentNode;

		parent.style.color = '#79D74A';
		grandParent.style.opacity = '0.5';

		setTimeout(function() {
			grandParent.style.opacity = '0';
		}, 1000);

		setTimeout(function() {
			var counter = 0;
			grandParent.style.display = 'none';
			for (var j = 0; j < cli.length; j++) {
				if(cli[j].style.display == 'none') {
					counter++;
				};
			};
			if(counter === 6) {
				finish.style.display = 'block';
			};
		}, 1500);
	});
};