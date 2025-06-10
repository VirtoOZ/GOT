export default class GotService {

	constructor() {
		this._apiBase = "https://www.anapioficeandfire.com/api";
	}
	datas = [
		{
			"aliases": [
				"The Daughter of the Dusk"
			],
			"allegiances": [],
			"books": [
				"https://www.anapioficeandfire.com/api/books/5"
			],
			"born": "",
			"culture": "Braavosi",
			"died": "",
			"father": "",
			"mother": "",
			"name": "",
			"playedBy": [],
			"povBooks": [],
			"spouse": "",
			"titles": [],
			"tvSeries": [],
			"url": "https://www.anapioficeandfire.com/api/characters/1"
		},
		{
			"aliases": [
				"Hodor"
			],
			"allegiances": [
				"https://www.anapioficeandfire.com/api/houses/362"
			],
			"books": [
				"https://www.anapioficeandfire.com/api/books/1"
			],
			"born": "",
			"culture": "",
			"died": "",
			"father": "",
			"mother": "",
			"name": "",
			"playedBy": [
				"Kristian Nairn"
			],
			"povBooks": [],
			"spouse": "",
			"titles": [],
			"tvSeries": [
				"Season 1",
				"Season 2",
				"Season 3",
				"Season 4"
			],
			"url": "https://www.anapioficeandfire.com/api/characters/2"
		}
	]
	data = {
		"aliases": [
			"Littlefinger"
		],
		"allegiances": [
			"https://www.anapioficeandfire.com/api/houses/10",
			"https://www.anapioficeandfire.com/api/houses/11"
		],
		"books": [
			"https://www.anapioficeandfire.com/api/books/1"
		],
		"born": "In 268 AC, at the Fingers",
		"culture": "Valemen",
		"died": "",
		"father": "",
		"mother": "",
		"name": "Petyr Baelish",
		"playedBy": [
			"Aidan Gillen"
		],
		"povBooks": [],
		"spouse": "https://www.anapioficeandfire.com/api/characters/688",
		"titles": [
			"Master of coin (formerly)",
			"Lord Paramount of the Trident",
			"Lord of Harrenhal",
			"Lord Protector of the Vale"
		],
		"tvSeries": [
			"Season 1",
			"Season 2",
			"Season 3",
			"Season 4",
			"Season 5"
		],
		"url": "https://www.anapioficeandfire.com/api/characters/823"
	}

	// async getResurse(url) {
	// const res = await fetch(`${this._apiBase}${url}`);

	// if (!res.ok) {
	// 	throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	// }

	// return await res.json();
	// };

	async getResurse(url) {
		//Для всех элементов
		// const res = this.data;

		//Для одного элемента
		const res = this.data;

		// return console.log(res);
		return res;
	};


	//<Получение нужных данных от API>=================================
	async getAllCharacters() {
		const res = await this.getResurse(`/characters?page=5&pageSize=10`);
		return res.map(this._transformChar);
	}
	async getCharacter(id) {
		const character = await this.getResurse(`/characters/${id}`);
		return this._transformChar(character);
	}
	async getAllbooks() {
		const books = await this.getResurse(`/books?page=1`);
		return books.map(this._transformBook);
	}
	async getBook(id) {
		const book = await this.getResurse(`/books/${id}`);
		return this._transformBook(book);
	}
	async getAllHouses() {
		const houses = await this.getResurse(`/houses?page=1`);
		return houses.map(this._transformHouse);
	}
	async getHouse(id) {
		const house = await this.getResurse(`/houses/${id}`);
		return this._transformHouse(house);
	}
	//</Получение нужных данных>=================================

	//<Трансформация для пришедших данных в нужный вид(формат)>=================================
	_transformChar(char) {
		return {
			name: char.name,
			gender: char.gender,
			born: char.born,
			died: char.died,
			culture: char.culture,
		}
	}
	_transformHouse(house) {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons,
		}
	}
	_transformBook(book) {
		return {
			name: book.name,
			numberOfPages: book.numberOfPages,
			publiser: book.publiser,
			released: book.released,
		}
	}
	//</Трансформация>=================================

}