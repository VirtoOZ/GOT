import { ReactNode } from "react";
import { CharacterTransformed } from "./interfaces";
//<Types>=================================
export type IsData = 'light' | 'dark';

export type SelectData = 'character' | 'characters' | 'detales';

export type ItemFieldProps = {
	value: "id" | "name" | "gender" | "born" | "died" | "culture";
	label: string;
	item: CharacterTransformed | null;
	// value: keyof CharacterTransformed;
};

export type SelectedItemProp = {

}
//</Types>=================================