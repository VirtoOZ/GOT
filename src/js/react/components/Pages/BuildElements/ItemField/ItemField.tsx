import { FC } from "react";
import { ItemFieldProps } from "../../../../types";
import { useGotData } from "../../../../contexts/useGotData";

export const ItemField: FC<ItemFieldProps> = ({ item, value, label }) => {
	const { character } = useGotData();

	// Безопасный доступ к значению с fallback
	const displayValue = item && item[value] !== undefined
		? String(item[value]) // Преобразуем в строку для надёжности
		: 'No data';

	return (
		<li className="random-char__item list__item">
			<span className="random-char__label list__label">{label}</span>
			<span className="random-char__value list__value">{displayValue}</span>
		</li>
	)
};