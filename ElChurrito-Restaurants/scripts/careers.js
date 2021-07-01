window.onload = startnow;

function startnow() {

	/*---Variables---*/

	var showjob = document.getElementById("results");
	var choice1 = document.getElementById("option1");
	var choice2 = document.getElementById("option2");
	var choice3 = document.getElementById("option3");
	var choice4 = document.getElementById("option4");
	var choice5 = document.getElementById("option5");
	var choice6 = document.getElementById("option6");
	var choice7 = document.getElementById("option7");
	var choice8 = document.getElementById("option8");

	choice1.onclick = job1;
	choice2.onclick = job2;
	choice3.onclick = job3;
	choice4.onclick = job4;
	choice5.onclick = job5;
	choice6.onclick = job6;
	choice7.onclick = job7;
	choice8.onclick = job8;


	/*------Fucntions for all Jobs------*/

	function job1() {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					showjob.innerHTML = xhr.responseText;
				} else {
					alert("Error")
				}
			}
		}

		xhr.open("GET", "./Txt/gman.txt", true);
		xhr.send(null);
	}


	function job2() {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					showjob.innerHTML = xhr.responseText;
				} else {
					alert("Error")
				}
			}
		}

		xhr.open("GET", "./Txt/kman.txt", true);
		xhr.send(null);

	}


	function job3() {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					showjob.innerHTML = xhr.responseText;
				} else {
					alert("Error")
				}
			}
		}

		xhr.open("GET", "./Txt/lcook.txt", true);
		xhr.send(null);

	}

	function job4() {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					showjob.innerHTML = xhr.responseText;
				} else {
					alert("Error")
				}
			}
		}

		xhr.open("GET", "./Txt/dishw.txt", true);
		xhr.send(null);
	}

	function job5() {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					showjob.innerHTML = xhr.responseText;
				} else {
					alert("Error")
				}
			}
		}

		xhr.open("GET", "./Txt/serv.txt", true);
		xhr.send(null);
	}
	function job6() {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					showjob.innerHTML = xhr.responseText;
				} else {
					alert("Error")
				}
			}
		}

		xhr.open("GET", "./Txt/host.txt", true);
		xhr.send(null);
	}
	function job7() {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					showjob.innerHTML = xhr.responseText;
				} else {
					alert("Error")
				}
			}
		}

		xhr.open("GET", "./Txt/bart.txt", true);
		xhr.send(null);
	}
	function job8() {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					showjob.innerHTML = xhr.responseText;
				} else {
					alert("Error")
				}
			}
		}

		xhr.open("GET", "./Txt/runn.txt", true);
		xhr.send(null);
	}

}