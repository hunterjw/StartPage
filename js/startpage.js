var days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday ",
	"Thursday",
	"Friday",
	"Saturday"
];

const months = [
	"January",
	"Febuary",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const lunchGreetings = [
	"Enjoy your break",
	"Lunch time!",
	"Enjoy your lunch"
];

const morningGreetings = [
	"Good Morning",
	"Have a wonderful day",
	"Enjoy your day",
	"Thanks for watching"
];

const nightGreetings = [
	"Sleep well",
	"Good Night",
	"Night night",
	"Time for bed"
];

const afternoonGreetings = [
	"Call it a day",
	"Pack up work",
	"Finish Move",
	"Game Over"
];

function GetGreeting(hours) {
	const random = a => a[Math.floor(Math.random() * a.length)];

	var toReturn = "";
	if (hours < 12) {
		if (hours > 5) {
			toReturn = random(morningGreetings);
		}
		else if (hours > 11) {
			toReturn = random(lunchGreetings);
		}
		else {
			toReturn = random(nightGreetings);
		}
	}
	else {
		if (hours < 13) {
			toReturn = random(lunchGreetings);
		}
		if (hours > 21) {
			toReturn = random(nightGreetings);
		}
		else {
			toReturn = random(afternoonGreetings);
		}
	}
	return toReturn;
}

function GetTimeString() {
	var now = new Date();
	var day = now.getDay();
	var month = now.getMonth();
	var date = now.getDate();
	var year = now.getFullYear();
	var hour = now.getHours();
	var minute = now.getMinutes();

	var greetingString = GetGreeting(hour);

	hour = (hour < 10 ? "0" : "") + hour;
	minute = (minute < 10 ? "0" : "") + minute;
	var timeString = hour + ":" + minute + " " + days[day] + " " + months[month]
		+ " " + date + " " + year;

	return {
		time: timeString,
		greeting: greetingString
	};
}

function Main() {
	console.log("Hello world");
	var strings = GetTimeString();
	console.log(strings.time);
	console.log(strings.greeting);
	document.getElementById("time-text").textContent = strings.time;
	document.getElementById("greeting-text").textContent = strings.greeting;
}

Main();