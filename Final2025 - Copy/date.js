

			function currentDate(){
			
			const today = new Date();
			let day = today.getDate();
			let month = today.getMonth() + 1;
			let year = today.getFullYear();
			let hour = today.getHours();
			let minutes = today.getMinutes();
			
			let ampm = hour >= 12 ? 'PM' : 'AM';
			hour = hour % 12;
			hour = hour ? hour : 12;

			let date = month + "-" + day + "-" + year + " | " + hour + ":" + 
			(minutes < 10 ? "0" + minutes : minutes) + "" + ampm;
			return date;
			}

			document.write(currentDate());