const btn = document.querySelectorAll(".btns");
const tab = document.querySelectorAll(".form");


btn.forEach(function(item) {
	item.addEventListener("click", function(){
		let currentBtn = item;
		let dataid = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(dataid);

		tab.forEach(function(item){
			item.classList.remove('show');
			item.classList.remove('enable');
		});

		currentTab.classList.add('show');

	});
});