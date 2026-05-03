import { FC, useEffect, Children, cloneElement, isValidElement, useState } from "react";
import { useGotData } from "../../../../../contexts/useGotData";
import { Spinner } from "../../../../ui";
import { DetalesProp } from "../../../../../types";

export const Detales: FC<DetalesProp> = ({ children, title }) => {
	const { detales, characters, updateData } = useGotData();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (characters) setLoading(false);
	}, [characters, updateData]);

	const ItemNotSelect = () => (
		<li className="random-char__title list__title">
			<h2 className="random-char__value list__value">
				Please select item from List!
			</h2>
		</li>
	);

	const detalesBuilder = () => {
		if (detales) {
			const { id, name } = detales;
			return (<>
				<li className="random-char__title list__title">
					<h2 className="random-char__value random-char__value-title list__value">
						{name} (id:{id})
					</h2>
				</li>
				{
					Children.map(children, child => {
						if (isValidElement(child)) {
							return cloneElement(child, { key: id, detales });
						}
						return child;
					})
				}
			</>);
		} return ItemNotSelect();
	};

	const detalesBody = loading ? <Spinner /> : detalesBuilder();

	return (
		<div className="random-char__wrapper">
			<div className="random-char__body">
				<ul className="random-char__list list">
					<div className="list__title">{title}</div>
					{detalesBody}
				</ul>
			</div>
		</div>
	);
};