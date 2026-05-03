import { FC, useEffect, useState } from "react";
import { useGotData } from "../../../../../contexts/useGotData";
import { Spinner } from "../../../../ui";

export const List: FC = () => {
	const { characters, updateData, onCharSelected } = useGotData();
	const [loading, setLoading] = useState(true);

	const renderCharacters = () => {
		if (!characters || characters.length === 0) return null;
		return characters.map((char) => {
			if (!char || !char.id) return null;
			return (
				<li
					key={char.id}
					className="list-char__item list__item"
					onClick={() => {
						return onCharSelected(char.id);
					}}
				>
					<span
						className="list-char__label list__label">
						{char.name || 'Unknown'}
					</span>
				</li>
			)
		});
	};

	useEffect(() => {
		if (!characters) {
			updateData('characters');
		} else setLoading(false);
	}, [characters]);

	return (
		<ul className="characters__list list">
			<div className="list__title">List</div>
			{
				loading ? <Spinner /> : renderCharacters()
			}
		</ul>
	);
};