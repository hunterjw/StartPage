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

const Backgrounds = [
	"images/backgrounds/faxdoc/cacao_and_coffee_shop.gif",
	"images/backgrounds/faxdoc/comition_sky_left_to_right.gif",
	"images/backgrounds/faxdoc/flower_shop.gif",
	"images/backgrounds/faxdoc/lullaby.gif",
	"images/backgrounds/faxdoc/midnight_melancholy.gif",
	"images/backgrounds/faxdoc/mountain_mote.gif",
	"images/backgrounds/faxdoc/nero_land.gif",
	"images/backgrounds/faxdoc/sideshop.gif",
	"images/backgrounds/faxdoc/stacking_houses_on_a_windy_day.gif",
	"images/backgrounds/kirokaze/amp_prob.gif",
	"images/backgrounds/kirokaze/attack.gif",
	"images/backgrounds/kirokaze/bad_landing.gif",
	"images/backgrounds/kirokaze/bluebalcony.gif",
	"images/backgrounds/kirokaze/cemetry.gif",
	"images/backgrounds/kirokaze/citymirror.gif",
	"images/backgrounds/kirokaze/coffeeinrain.gif",
	"images/backgrounds/kirokaze/dark_pillar.gif",
	"images/backgrounds/kirokaze/droidcrime.gif",
	"images/backgrounds/kirokaze/elderorc.gif",
	"images/backgrounds/kirokaze/factory5.gif",
	"images/backgrounds/kirokaze/familydinner.gif",
	"images/backgrounds/kirokaze/horse.gif",
	"images/backgrounds/kirokaze/iplayoldgames.gif",
	"images/backgrounds/kirokaze/last_dance.gif",
	"images/backgrounds/kirokaze/metro_final.gif",
	"images/backgrounds/kirokaze/nightlytraining.gif",
	"images/backgrounds/kirokaze/pilot.gif",
	"images/backgrounds/kirokaze/player2.gif",
	"images/backgrounds/kirokaze/reddriver.gif",
	"images/backgrounds/kirokaze/robot_alley.gif",
	"images/backgrounds/kirokaze/sandcastle.gif",
	"images/backgrounds/kirokaze/shootingstars.gif",
	"images/backgrounds/kirokaze/spacecommander.gif",
	"images/backgrounds/kirokaze/spaceport.gif",
	"images/backgrounds/kirokaze/thieves.gif",
	"images/backgrounds/kirokaze/train.gif",
	"images/backgrounds/kirokaze/train_city.gif",
	"images/backgrounds/kirokaze/troll_cave.gif",
	"images/backgrounds/kirokaze/wild_boy.gif",
	"images/backgrounds/kirokaze/windyday.gif",
	"images/backgrounds/kirokaze/youngatnight.gif",
	"images/backgrounds/kirokaze/zombies.gif",
	"images/backgrounds/landscapes/bridge.gif",
	"images/backgrounds/landscapes/bridge_raining.gif",
	"images/backgrounds/landscapes/castle.gif",
	"images/backgrounds/landscapes/cave.gif",
	"images/backgrounds/landscapes/coast.gif",
	"images/backgrounds/landscapes/dawn.gif",
	"images/backgrounds/landscapes/falls.gif",
	"images/backgrounds/landscapes/fire.gif",
	"images/backgrounds/landscapes/forrest.gif",
	"images/backgrounds/landscapes/fortress.gif",
	"images/backgrounds/landscapes/grandcanyon.gif",
	"images/backgrounds/landscapes/lake.gif",
	"images/backgrounds/landscapes/mountain.gif",
	"images/backgrounds/landscapes/nature.gif",
	"images/backgrounds/landscapes/northlights.gif",
	"images/backgrounds/landscapes/rain.gif",
	"images/backgrounds/landscapes/sea.gif",
	"images/backgrounds/landscapes/snow.gif",
	"images/backgrounds/landscapes/swamp.gif",
	"images/backgrounds/landscapes/swirling.gif",
	"images/backgrounds/landscapes/temple.gif",
	"images/backgrounds/landscapes/tower.gif",
	"images/backgrounds/landscapes/town.gif",
	"images/backgrounds/landscapes/underwater.gif",
	"images/backgrounds/valenberg/bicycle.gif",
	"images/backgrounds/valenberg/blade.gif",
	"images/backgrounds/valenberg/controlroom.gif",
	"images/backgrounds/valenberg/daftpunk.gif",
	"images/backgrounds/valenberg/drift.gif",
	"images/backgrounds/valenberg/echoesfromneals.gif",
	"images/backgrounds/valenberg/exodus.gif",
	"images/backgrounds/valenberg/future.gif",
	"images/backgrounds/valenberg/girlinrain.gif",
	"images/backgrounds/valenberg/highfloor.gif",
	"images/backgrounds/valenberg/highlands.gif",
	"images/backgrounds/valenberg/highsoceity.gif",
	"images/backgrounds/valenberg/jazznight.gif",
	"images/backgrounds/valenberg/lowlands.gif",
	"images/backgrounds/valenberg/moon.png",
	"images/backgrounds/valenberg/motorcycle.gif",
	"images/backgrounds/valenberg/nighttrain.gif",
	"images/backgrounds/valenberg/redbicycle.gif",
	"images/backgrounds/valenberg/ride.gif",
	"images/backgrounds/valenberg/shop.gif",
	"images/backgrounds/valenberg/skate.gif",
	"images/backgrounds/valenberg/streets.gif",
	"images/backgrounds/valenberg/sushi.gif",
	"images/backgrounds/valenberg/tv.gif",
	"images/backgrounds/valenberg/virtuaverse.gif"
];

const random = a => a[Math.floor(Math.random() * a.length)];

class StartPage {
	constructor() {
		this.State = this.MakeState("", "", "", 0, TimesOfDay.None,
			"images/sample.png");
		this.PreviousState = this.State;
		this.DateElement = document.getElementById("date-text");
		this.GreetingElement = document.getElementById("greeting-text");
		this.BodyElement = document.body;
		this.ClockElement = document.getElementById("clock-text");
		if (this.BodyElement != null) {
			this.BodyElement.addEventListener("keydown", (event) => {
				this.OnKeydownHandler(event);
			});
			this.BodyElement.focus();
		}
	}

	MakeState(clockDisplay, dateDisplay, greetingDisplay, currentSeconds,
		timeOfDay, backgroundImage) {
		return {
			ClockDisplay: clockDisplay,
			DateDisplay: dateDisplay,
			GreetingDisplay: greetingDisplay,
			CurrentSeconds: currentSeconds,
			TimeOfDay: timeOfDay,
			BackgroundImage: backgroundImage
		}
	}

	Sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	MainLoop() {
		this.Update(false);
		this.Draw();
		this.Sleep(60000 - (this.State.CurrentSeconds * 1000)).then(() => {
			this.MainLoop()
		});
	}

	Update(forceRefresh) {
		this.PreviousState = this.State;

		var now = new Date();
		var hour = now.getHours();
		var minute = now.getMinutes();

		var greetingString = "";
		var backgroundImage = "";
		var timeOfDay = this.GetTimeOfDay(hour);
		if ((timeOfDay != this.PreviousState.TimeOfDay) ||
			forceRefresh) {
			greetingString = this.GetGreeting(timeOfDay);
			backgroundImage = this.GetRandomBackoundImage();
		}
		else {
			greetingString = this.PreviousState.GreetingDisplay;
			backgroundImage = this.PreviousState.BackgroundImage;
		}

		var clockString = "";
		if (hour == 0 && minute == 0) {
			clockString = "Midnight";
		}
		else if (hour == 12 && minute == 0) {
			clockString = "Noon";
		}
		else {
			hour = (hour < 10 ? "0" : "") + hour;
			minute = (minute < 10 ? "0" : "") + minute;
			clockString = hour + ":" + minute;
		}

		var dateString = Days[now.getDay()] + " " + Months[now.getMonth()]
			+ " " + now.getDate() + " " + now.getFullYear();

		this.State = this.MakeState(clockString, dateString, greetingString,
			now.getSeconds(), timeOfDay, backgroundImage);
	}

	Draw() {
		console.log(this.State.TimeDisplay);
		console.log(this.State.GreetingDisplay);
		console.log(this.State.BackgroundImage);
		if (this.ClockElement != null) {
			this.ClockElement.textContent = this.State.ClockDisplay;
		}
		if (this.DateElement != null) {
			this.DateElement.textContent = this.State.DateDisplay;
		}
		if (this.GreetingElement != null) {
			this.GreetingElement.textContent = this.State.GreetingDisplay;
		}
		if (this.BodyElement != null) {
			this.BodyElement.style.backgroundImage = "url('" +
				this.State.BackgroundImage + "')";
		}

	}

	GetGreeting(timeOfDay) {
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
		if (hours < 12) {
			if (hours <= 5) {
				return TimesOfDay.Night;
			}
			else if (hours < 11) {
				return TimesOfDay.Morning;
			}
			else {
				return TimesOfDay.Lunch;
			}
		}
		else {
			if (hours < 13) {
				return TimesOfDay.Lunch;
			}
			else if (hours <= 21) {
				return TimesOfDay.Afternoon;
			}
			else {
				return TimesOfDay.Night;
			}
		}
	}

	GetRandomBackoundImage() {
		return random(Backgrounds);
	}

	OnKeydownHandler(event) {
		console.log(event.keyCode + " key pressed");
		if (event.keyCode == 32) {
			this.Update(true);
			this.Draw();
		}
	}
}

var startPage = new StartPage();
startPage.MainLoop();