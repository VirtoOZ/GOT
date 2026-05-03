import { FC } from "react";

export const Spinner: FC = () => {
	return (
		<div className="spinner">
			<div className="spinner__wrapper">
				<div className="spinner__box">
					<img className="spinner__img" src="img/icons/spinner.gif" alt="spinner" />
				</div>
				<p className="spinner__text">Loading...</p>
			</div>
		</div>
	);
};