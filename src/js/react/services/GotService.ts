import type {
	Books,
	BookTransformed,
	Characters,
	CharacterTransformed,
	Houses,
	HouseTransformed,
	WithUrl
} from "../types";


export interface IGotService {
	getCharacter: (id: number) => Promise<CharacterTransformed>;
	getAllCharacters: () => Promise<CharacterTransformed[]>;
	getBook: (id: number) => Promise<BookTransformed>;
	getAllBooks: () => Promise<BookTransformed[]>;
	getHouse: (id: number) => Promise<HouseTransformed>;
	getAllHouses: () => Promise<HouseTransformed[]>;
	getId: <T extends WithUrl>(item: T) => number | null;
}

export const GotService = (): IGotService => {
	const _ApiBase = `https://www.anapioficeandfire.com/api`;

	const getResurce = async (url: string) => {
		const result = await fetch(url);
		if (!result.ok) {
			throw new Error(`Coud not fetch: ${url}, status: ${result.status}`);
		}
		// return result;
		return result.json();
	};

	/* //Получение данных с Json-server
		const _ApiBase = `http://localhost:3000/GOT`;
	
		const handleError = <T>(error: unknown, fallback: T): T => {
			console.error('API Error:', error);
			return fallback;
		};
	
			const getCharacter = async (id: number): Promise<CharacterTransformed> => {
				const chars: any[] = await getResurce(_ApiBase);
				const result = chars.filter(char => getId(char) === id)[0];
				// const char = await getResurce(`${_ApiBase}/characters/${id}`);
				return _transformCharacter(result);
			} 

			const getAllCharacters = async (): Promise<CharacterTransformed[]> => {
		const chars = await getResurce(_ApiBase);
		return chars.map(_transformCharacter);
	}; */

	const getCharacter = async (id: number): Promise<CharacterTransformed> => {
		const char = await getResurce(`${_ApiBase}/characters/${id}`);
		return _transformCharacter(char);
	};

	const getAllCharacters = async (): Promise<CharacterTransformed[]> => {
		const chars = await getResurce(`${_ApiBase}/characters?page=5&pageSize=10`);
		return chars.map(_transformCharacter);
	};

	const getBook = async (id: number): Promise<BookTransformed> => {
		try {
			const book = await getResurce(`${_ApiBase}/books/${id}`);
			return _transformBook(book);
		} catch (error) {
			console.error('Error fetching book:', error)
			return {
				id: null,
				name: 'no data',
				authors: 'no data',
				country: 'no data',
				numberOfPages: 'no data',
				mediaType: 'no data',
			};
		}
	};

	const getAllBooks = async (): Promise<BookTransformed[]> => {
		try {
			const books = await getResurce(`${_ApiBase}/books?=3&pageSize=10`);
			return books.map(_transformBook);
		} catch (error) {
			console.error('Error fetching books:', error)
			return [{
				id: null,
				name: 'no data',
				authors: 'no data',
				country: 'no data',
				numberOfPages: 'no data',
				mediaType: 'no data',
			}];
		}
	};

	const getHouse = async (id: number): Promise<HouseTransformed> => {
		try {
			const house = await getResurce(`${_ApiBase}/houses/${id}`);
			return _transformHouses(house);
		}
		catch (error) {
			console.error('Error fetching House:', error);
			return {
				id: null,
				name: 'no data',
				region: 'no data',
				words: 'no data',
				coatOfArms: 'no data',
			};
		}
	};

	const getAllHouses = async (): Promise<HouseTransformed[]> => {
		try {
			const houses = await getResurce(`${_ApiBase}/houses?page=5&pageSize=10`);
			return houses.map(_transformHouses);
		}
		catch (error) {
			console.error('Error fetching Houses:', error);
			return [{
				id: null,
				name: 'no data',
				region: 'no data',
				words: 'no data',
				coatOfArms: 'no data',
			}];
		}
	};

	const isData = <T>(data: T | null | undefined | 'no-data'): T | string => {
		return data !== '' && data !== null && data !== undefined ? data : 'no-data';
	};

	const getId = <T extends WithUrl>(item: T): number | null => {
		if (!item || !item.url) return null;
		const match = item.url.match(/\/([0-9]*)$/);
		const idStr = match?.[1];
		if (!idStr) return null;
		const idNum = parseInt(idStr, 10);
		return isNaN(idNum) ? null : idNum;
	};

	const _transformCharacter = (char: Characters | null | undefined): CharacterTransformed => {
		if (!char) return {
			id: null,
			name: 'no data',
			gender: 'no data',
			born: 'no data',
			died: 'no data',
			culture: 'no data'
		};
		return {
			id: getId(char),
			name: isData(char.name),
			gender: isData(char.gender),
			born: isData(char.born),
			died: isData(char.died),
			culture: isData(char.culture),
		}
	};

	const _transformBook = (book: Books): BookTransformed => {
		return {
			id: getId(book),
			name: isData(book.name),
			authors: isData(book.authors),
			country: isData(book.country),
			numberOfPages: isData(book.numberOfPages),
			mediaType: isData(book.mediaType),
		}
	};

	const _transformHouses = (house: Houses): HouseTransformed => {
		return {
			id: getId(house),
			name: isData(house.name),
			region: isData(house.region),
			words: isData(house.words),
			coatOfArms: isData(house.coatOfArms),
		}
	};
	return {
		getCharacter,
		getAllCharacters,
		getBook,
		getAllBooks,
		getHouse,
		getAllHouses,
		getId
	};
};
