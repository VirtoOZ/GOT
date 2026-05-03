import { FC } from "react";

export const ErrorMessage: FC = () => {
	return (
		<div className="error">
			<div className="error__wrapper">
				<div className="error__ibg">
					<img className="error__image" src="img/app/Daineris-Else.png" alt="error-img" />
				</div>
				<div className="error__text">Проверь VPN...</div>
				<div className="error__text">Something goes wrong...</div>
			</div>
		</div>
	);
};