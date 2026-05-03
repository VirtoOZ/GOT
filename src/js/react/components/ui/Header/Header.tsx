import { FC } from "react";
import { Link } from "react-router";

export const Header: FC = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="header__body">
					<Link
						to='/'
						className="header__name"
					>
						Game of Thrones <p>Wiki</p>
					</Link >
					<div className="header__menu menu">
						<button type="button" className="menu__icon icon-menu">
							<span></span>
						</button>
						<nav className="menu__body">
							<ul className="menu__list">
								<li className="menu__item">
									<Link
										className="menu__link"
										to='/characters'
										onClick={() => null}
									>
										Characters
									</Link>
								</li>
								<li className="menu__item">
									<Link
										className="menu__link menu__disable"
										to='/books'
										onClick={() => null}
									>
										Books
									</Link>
								</li>
								<li className="menu__item ">
									<Link
										className="menu__link menu__disable"
										to='/houses'
										onClick={() => null}
									>
										Houses
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="header__icon icon-menu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
}