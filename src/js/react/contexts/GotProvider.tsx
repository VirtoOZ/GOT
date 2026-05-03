import { FC, useMemo, useState } from "react";
import { GotContext } from "./GotContext";
import { CharacterTransformed, GotProviderProp, SelectData } from "../types";
import { FALLBACK_CHARACTER, FALLBACK_CHARACTERS } from "../services/Examples";
import { GotService } from "../services/GotService";

export const GotProvider: FC<GotProviderProp> = ({ children }) => {
	const [character, setCharacter] = useState<CharacterTransformed | null>(null);
	const [detales, setDetales] = useState<CharacterTransformed | null>(null);
	const [characters, setCharacters] = useState<CharacterTransformed[] | null>(null);
	const [errorStatus, setErrorStatus] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [selectedItem, setSelectedItem] = useState<number | null>(3);
	const [nameContant, setNameContant] = useState<string>('character');
	const [mainContant, setMainContant] = useState<CharacterTransformed | null>(null);

	const getTestingData = () => {
		setCharacter(FALLBACK_CHARACTER);
		setCharacters(FALLBACK_CHARACTERS);
	};

	const targetContant = (name: string) => {
		switch (name) {
			case 'character':
				return setMainContant(character);
			case 'book':
			// return setMainContant(book);
			case 'home':
			// return setMainContant(home);
			default:
				'no matches'
				break;
		}
	}

	const gotService = GotService();

	const updateData = async (selectData: SelectData, id?: number | null) => {
		setErrorStatus(false);
		setLoading(true);
		try {
			if (selectData === 'character') {
				if (!id) throw new Error('Character ID is required');
				const data = await gotService.getCharacter(id);
				setCharacter(data);
				// }
			} else if (selectData === 'characters') {
				const data = await gotService.getAllCharacters();
				setCharacters(data);
				// }
			} else if (selectData === 'detales') {
				if (!id) throw new Error('Character ID is required');
				const data = await gotService.getCharacter(id);
				setDetales(data);
				// }
			}
		} catch (error) {
			// getTestingData();
			console.error("Error fetching:", error);
			setErrorStatus(true);
		} finally {
			// setLoading(false);
		}
	};

	const onCharSelected = (id: number | null) => {
		if (!characters || !id) return;
		const result = characters.find((char) => char.id === id);
		console.log('id:', id, 'result:', result);
		if (result) return setDetales(result);
	};

	const value = useMemo(() => ({
		character,
		updateData,
		errorStatus,
		characters,
		selectedItem,
		setSelectedItem,
		loading,
		onCharSelected,
		getTestingData,
		detales,
		setDetales,
		nameContant,
		mainContant,
	}), [
		character,
		updateData,
		errorStatus,
		characters,
		selectedItem,
		setSelectedItem,
		loading,
		onCharSelected,
		getTestingData,
		detales,
		setDetales,
		nameContant,
		mainContant
	]);

	return (
		<GotContext.Provider value={value}>
			{children}
		</GotContext.Provider>
	);
};