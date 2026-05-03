//<INTERFACES>=================================
import { SelectData } from "./types";
import { ReactNode } from "react";

export interface Characters {
	name?: string | null;
	gender?: string | null;
	born?: string | null;
	died?: string | null;
	culture?: string | null;
	url?: string;
};

export interface Books {
	name?: string | null;
	authors?: string | null;
	country?: string | null;
	numberOfPages?: string | null;
	mediaType?: string | null;
	url: string;
};

export interface Houses {
	name?: string | null;
	region?: string | null;
	words?: string | null;
	coatOfArms?: string | null;
	url: string;
};

export interface CharacterTransformed {
	id: number | null;
	name: string;
	gender: string;
	born: string;
	died: string;
	culture: string;
};

export interface BookTransformed {
	id: number | null;
	name: string;
	authors: string;
	country: string;
	numberOfPages: string;
	mediaType: string;
};

export interface HouseTransformed {
	id: number | null;
	name: string;
	region: string;
	words: string;
	coatOfArms: string;
};

export interface WithUrl { url?: string };

export type GotProviderProp = { children: ReactNode };

export interface RandomProp extends GotProviderProp {
	title: string;
};

export interface DetalesProp extends RandomProp {
};

export interface GotContextProp {
	character: CharacterTransformed | null;
	detales: CharacterTransformed | null;
	characters: CharacterTransformed[] | null;
	updateData: (selectData: SelectData, id?: number | null) => void;
	errorStatus: boolean;
	selectedItem: number | null;
	setSelectedItem: (selectItem: number | null) => void;
	loading: boolean;
	onCharSelected: (id: number | null) => void;
	getTestingData: () => void;
	setDetales: (detales: CharacterTransformed) => void;
	nameContant: string;
	mainContant: CharacterTransformed | null;
};
//</INTERFACES>=================================