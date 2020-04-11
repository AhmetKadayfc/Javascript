// HTTP STATUS

// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

// readyState

// 0 : Request not initialized
// 1 : Server connection established
// 2 : request received
// 3 : processing request
// 4 : request finished and response is ready

document.getElementById('btn').addEventListener('click', () => {
	// xhr= XMLHttpRequest
	const xhr = new XMLHttpRequest();

	xhr.onprogress = function() {
		console.log('İşleniyor...', this.readyState);
	};
	xhr.onload = function() {
		console.log('İşlendi', this.readyState);
		if (this.status == 200) {
			document.getElementById('ajax').textContent = this.responseText;
		}
	};

	// Eski
	// xhr.onreadystatechange = function() {
	// 	if (this.status == 200 && this.readyState == 4) {
	// 		//Respone hazır
	// 		console.log(this.responseText);
	// 	}
	// };

	xhr.open('GET', 'example.txt', true);
	xhr.send();
});
