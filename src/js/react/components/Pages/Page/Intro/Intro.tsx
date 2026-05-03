import { FC } from "react";

export const Intro: FC = () => {
	const onClick = () => {
		document.documentElement.querySelector('.intro')?.classList.add('hide')
	};
	return (
		<div className="intro">
			<div className="intro__wrapper">
				<div className="intro__content">
					<div className="intro__text">
						<p>Здраствуйте.</p>
						<p>Это мой пет проект.</p>
						<p>Я использовал API, сервер которого находится зарубежом.</p>
						<p>Для корректной работы, пожалуйста включите <span>VPN</span>.</p>
					</div>
					<button
						className="random-char__btn" onClick={onClick}>
						Поехали
					</button>
				</div>
			</div>
		</div>
	)
};