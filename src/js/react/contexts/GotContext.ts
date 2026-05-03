import { createContext } from "react";
import { GotContextProp } from "../types";

import { FALLBACK_CHARACTER } from "../services/Examples";

export const GotContext = createContext<GotContextProp>({
	character: null,
	updateData: () => { },
	errorStatus: false,
	characters: null,
	selectedItem: 0,
	setSelectedItem: () => { },
	loading: true,
	onCharSelected: () => { },
	getTestingData: () => { },
	detales: FALLBACK_CHARACTER,
	setDetales: () => { },
	nameContant: '',
	mainContant: null,
});