var days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday ",
	"Thursday",
	"Friday",
	"Saturday"
];

var months = [
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

function GetTimeString() {
	var now = new Date();
	var day = now.getDay();
	var month = now.getMonth();
	var date = now.getDate();
	var year = now.getFullYear();
	var hour = now.getHours();
	var minute = now.getMinutes();

	hour = (hour < 10 ? "0" : "") + hour;
	minute = (minute < 10 ? "0" : "") + minute;

	return hour + ":" + minute + " " + days[day] + " " + months[month]
		+ " " + date + " " + year;
}

function Main() {
	console.log("Hello world");
	var timeString = GetTimeString();
	console.log(timeString);
	document.getElementById("time-text").textContent = timeString;
}

Main();