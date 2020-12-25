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

const TimesOfDay = {
	None: 0,
	Morning: 1,
	Lunch: 2,
	Afternoon: 3,
	Night: 4
}

class StartPage {
	constructor() {
		this.State = this.MakeState("", "", 0, TimesOfDay.None);
		this.PreviousState = this.State;
		this.TimeElement = document.getElementById("time-text");
		this.GreetingElement = document.getElementById("greeting-text");
	}

	MakeState(timeDisplay, greetingDisplay, currentSeconds, timeOfDay) {
		return {
			TimeDisplay: timeDisplay,
			GreetingDisplay: greetingDisplay,
			CurrentSeconds: currentSeconds,
			TimeOfDay: timeOfDay
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

		var greetingString = ""
		var timeOfDay = this.GetTimeOfDay(hour);
		if (timeOfDay != this.PreviousState.TimeOfDay) {
			greetingString = this.GetGreeting(timeOfDay);
		}
		else {
			greetingString = this.PreviousState.GreetingDisplay;
		}

		hour = (hour < 10 ? "0" : "") + hour;
		minute = (minute < 10 ? "0" : "") + minute;
		var timeString = hour + ":" + minute + " " + Days[now.getDay()] + " " + Months[now.getMonth()]
			+ " " + now.getDate() + " " + now.getFullYear();

		this.State = this.MakeState(timeString, greetingString, now.getSeconds(), timeOfDay);
	}

	Draw() {
		console.log(this.State.TimeDisplay);
		console.log(this.State.GreetingDisplay);
		if (this.TimeElement != null) {
			this.TimeElement.textContent = this.State.TimeDisplay;
		}
		if (this.GreetingElement != null) {
			this.GreetingElement.textContent = this.State.GreetingDisplay;
		}
		
	}

	GetGreeting(timeOfDay) {
		const random = a => a[Math.floor(Math.random() * a.length)];

		var toReturn = "";
		if (timeOfDay == TimesOfDay.Morning) {
			toReturn = random(MorningGreetings);
		}
		else if (timeOfDay == TimesOfDay.Lunch) {
			toReturn = random(LunchGreetings);
		}
		else if (timeOfDay == TimesOfDay.Afternoon) {
			toReturn = random(AfternoonGreetings);
		}
		else if (timeOfDay == TimesOfDay.Night) {
			toReturn = random(NightGreetings);
		}
		return toReturn;
	}

	GetTimeOfDay(hours) {
		var toReturn = TimesOfDay.None;
		if (hours < 12) {
			if (hours > 5) {
				toReturn = TimesOfDay.Morning;
			}
			else if (hours > 11) {
				toReturn = TimesOfDay.Lunch;
			}
			else {
				toReturn = TimesOfDay.Night;
			}
		}
		else {
			if (hours < 13) {
				toReturn = TimesOfDay.Lunch;
			}
			if (hours > 21) {
				toReturn = TimesOfDay.Night;
			}
			else {
				toReturn = TimesOfDay.Afternoon;
			}
		}
		return toReturn;
	}
}

var startPage = new StartPage();
startPage.MainLoop();