export default class GotService {

	constructor() {
		this._apiBase = 'https://anapioficeandfire.com/api';
	}
	async getResurse(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	};

	getAllCharacters() {
		return this.getResurse(`/characters?page=5&pageSize=10`);
	}
	getCharacter(id) {
		return this.getResurse(`/characters/${id}`);
	}
	getAllbooks() {
		return this.getResurse(`/books?page=1`);
	}
	getBook(id) {
		return this.getResurse(`/books/${id}`);
	}
	getAllHouses() {
		return this.getResurse(`/houses?page=1`);
	}
	getHouse(id) {
		return this.getResurse(`/houses/${id}`);
	}
}