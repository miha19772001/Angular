

export interface IWeather {
	temp: string;
	city: string;
	img: string;
	feels_like: string;
	pressure: string;
	description: string;
	window: {
		deg: string,
		speed: string,
	}
}