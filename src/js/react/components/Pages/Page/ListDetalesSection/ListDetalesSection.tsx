import { FC } from "react";
import { List } from "./ListBlock/List";
import { Detales } from "./DetalesBlock/Detales";
import { ItemField } from "../../BuildElements/ItemField/ItemField";
import { useGotData } from "../../../../contexts/useGotData";

export const ListDetalesSection: FC = () => {
	const { detales, nameContant } = useGotData();

	return (
		<section className="characters page__section">
			<div className="characters__wrapper">
				<div className="characters__body">
					<List />
				</div>
				<div className="characters__body">
					<Detales title={`Detales ${nameContant}`}>
						<ItemField item={detales} label={'Gender'} value={'gender'} />
						<ItemField item={detales} label={'Born'} value={'born'} />
						<ItemField item={detales} label={'Died'} value={'died'} />
						<ItemField item={detales} label={'Culture'} value={'culture'} />
					</Detales>
				</div>
			</div>
		</section >
	)
};