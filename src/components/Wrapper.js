import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch } from 'react-router-dom';

import { Overlay, SettingsToggle } from './library';
import routes from './routes';

import Settings from './settings/Settings';
import AppRoute from './AppRoute';
import Bootstrap from './styles/Bootstrap';

import { isDev } from './utils';
import About from './dashboards/pages/about/About';
import Navbar from './navbar/Navbar';
import Home from './dashboards/pages/home/Home';
const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	@media (min-width: ${(p) => p.theme.screenWidthMd}) {
		flex-direction: row;
	}
`;
const Wrapper = ({ setTheme, setFont, isDarkTheme }) => {
	const [isSettingsOpen, setSettingsOpen] = useState(false);

	const isOverlayVisible = isSettingsOpen;
	const handleOverlayClicked = () => {
		setSettingsOpen(false);
	};
	return (
		<StyledWrapper>
			<Overlay zIndex={5} onClick={handleOverlayClicked} isVisible={isOverlayVisible} />
			<Bootstrap />
			<Navbar />
			<SettingsToggle onClick={() => setSettingsOpen(true)} />
			<Settings
				isSettingsOpen={isSettingsOpen}
				setSettingsOpen={setSettingsOpen}
				setTheme={setTheme}
				setFont={setFont}
			/>
			<Switch>
				<AppRoute exact path="/" component={Home} />
				<AppRoute exact path="/about" component={About} />
				{/* {routes.map((items, key) => {
					<AppRoute key={items.path} exact={items.exact} path={items.path} component={items.example} />;
				})} */}
			</Switch>
			{/* <About /> */}
		</StyledWrapper>
	);
};
export default Wrapper;
