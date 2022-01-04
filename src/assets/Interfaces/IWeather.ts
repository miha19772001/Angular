

export interface IWeather {
	city: string;
	temp: string;
	feels_like: string;
	description: string;
	pressure: string;
	img: string;
	window: {
		deg: string,
		speed: string,
	}
	date?: any,
	month?: any,
	dayOfWeek?: any,
}