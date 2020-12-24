const Days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday ",
	"Thursday",
	"Friday",
	"Saturday"
];

const Months = [
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

const LunchGreetings = [
	"Enjoy your break",
	"Lunch time!",
	"Enjoy your lunch"
];

const MorningGreetings = [
	"Good Morning",
	"Have a wonderful day",
	"Enjoy your day",
	"Thanks for watching"
];

const NightGreetings = [
	"Sleep well",
	"Good Night",
	"Night night",
	"Time for bed"
];

const AfternoonGreetings = [
	"Call it a day",
	"Pack up work",
	"Finish Move",
	"Game Over"
];

class StartPage {
	constructor() {
		this.State = this.MakeState("", "", 0);
		this.PreviousState = this.State;
	}

	MakeState(timeDisplay, greetingDisplay, currentSeconds) {
		return {
			TimeDisplay: timeDisplay,
			GreetingDisplay: greetingDisplay,
			CurrentSeconds: currentSeconds
		}
	}

	Sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	MainLoop() {
		this.Update();
		this.Draw();
		this.Sleep(60000 - (this.State.CurrentSeconds * 1000)).then(() => { this.MainLoop() });
	}

	Update() {
		this.PreviousState = this.State;

		var now = new Date();
		var hour = now.getHours();
		var minute = now.getMinutes();

		var greetingString = this.GetGreeting(hour);

		hour = (hour < 10 ? "0" : "") + hour;
		minute = (minute < 10 ? "0" : "") + minute;
		var timeString = hour + ":" + minute + " " + Days[now.getDay()] + " " + Months[now.getMonth()]
			+ " " + now.getDate() + " " + now.getFullYear();

		this.State = this.MakeState(timeString, greetingString, now.getSeconds());
	}

	Draw() {
		console.log(this.State.TimeDisplay);
		console.log(this.State.GreetingDisplay);
		var timeElement = document.getElementById("time-text");
		if (timeElement != null) {
			timeElement.textContent = this.State.TimeDisplay;
		}
		var greetingElement = document.getElementById("greeting-text");
		if (greetingElement != null) {
			greetingElement.textContent = this.State.GreetingDisplay;
		}
		
	}

	GetGreeting(hours) {
		const random = a => a[Math.floor(Math.random() * a.length)];

		var toReturn = "";
		if (hours < 12) {
			if (hours > 5) {
				toReturn = random(MorningGreetings);
			}
			else if (hours > 11) {
				toReturn = random(LunchGreetings);
			}
			else {
				toReturn = random(NightGreetings);
			}
		}
		else {
			if (hours < 13) {
				toReturn = random(LunchGreetings);
			}
			if (hours > 21) {
				toReturn = random(NightGreetings);
			}
			else {
				toReturn = random(AfternoonGreetings);
			}
		}
		return toReturn;
	}
}

var startPage = new StartPage();
startPage.MainLoop();