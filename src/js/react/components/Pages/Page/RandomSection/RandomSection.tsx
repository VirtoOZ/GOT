import { FC, useState } from "react";
import { Random } from "./Random";
import { ItemField } from "../../BuildElements/ItemField/ItemField";
import { useGotData } from "../../../../contexts/useGotData";

export const RandomSection: FC = () => {
	const [onHideChar, setOnHideChar] = useState<boolean>(false);
	const { nameContant, character } = useGotData();

	const random = !onHideChar
		? (<Random title={`Random ${nameContant}`}>
			<ItemField item={character} label={'Gender'} value={'gender'} />
			<ItemField item={character} label={'Born'} value={'born'} />
			<ItemField item={character} label={'Died'} value={'died'} />
			<ItemField item={character} label={'Culture'} value={'culture'} />
		</Random>)
		: null;

	return (
		<section className="random-char page__section">
			{random}
			<button
				className="random-char__btn"
				onClick={() => setOnHideChar(!onHideChar)}
			>Random</button>
		</section>
	)
};