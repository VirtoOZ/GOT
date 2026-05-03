import { FC, useEffect, Children, cloneElement, isValidElement, useState } from "react";
import { useGotData } from "../../../../contexts/useGotData";
import { Spinner } from "../../../ui";
import { RandomProp } from "../../../../types";

export const Random: FC<RandomProp> = ({ children, title }) => {
	const { character, updateData } = useGotData();
	const [loading, setLoading] = useState(true);

	/* 	componentDidMount() {
			this.updateCharacter();
			this.timerId = setInterval(this.updateCharacter, 4000);
		}
		const id = Math.floor(Math.random() * 140 + 25); //25-140
	
		componentWillUnmount() {
			clearInterval(this.timerId);
		} */

	const buildRandom = () => {
		if (character) {
			const { id, name } = character;
			return (
				<>
					<li className="random-char__title list__title">
						<h2 className="random-char__value random-char__value-title list__value">{name} (id:{id})</h2>
					</li>
					{
						Children.map(children, child => {
							if (isValidElement(child)) {
								return cloneElement(child, { key: id, character });
							}
							return child;
						})
					}
				</>
			);
		}
	};

	const generateRandomId = () =>
		Math.floor(Math.random() * (140 - 25 + 1)) + 25;

	useEffect(() => {
		const timerId = setInterval(() => {
			updateData('character', generateRandomId());
		}, 4000);
		return () => clearInterval(timerId);
	}, [updateData]);

	useEffect(() => {
		if (!character) {
			updateData('character', generateRandomId());
		} else setLoading(false);
	}, [character]);

	return (
		<div className="random-char__wrapper">
			<div className="random-char__body">
				<ul className="random-char__list list">
					<div className="list__title">{title}</div>
					{
						loading ? <Spinner /> : buildRandom()
					}
				</ul>
			</div>
		</div>
	);
};