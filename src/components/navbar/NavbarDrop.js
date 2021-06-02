import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Badge } from '../library';

const sharedWrapperStyles = css`
	flex: 0 1 auto;
	display: flex;
	${'' /* flex-direction: row; */}
	align-items: center;
	overflow: auto;
	${'' /* padding: 0 ${(p) => p.theme.lenMd3} 0 ${(p) => p.theme.lenSm2}; */}

	${'' /* @media (min-width: ${(p) => p.theme.screenWidthMd}) { */}
		flex-direction: column;
		height: auto;
		padding: 0;
	${'' /* } */}
`;
const StyledScrollbarWrapper = styled(PerfectScrollbar)`
	${sharedWrapperStyles};

	/* display: none; */

	/* @media (min-width: ${(p) => p.theme.screenWidthMd}) { */
		display: block;
	/* } */
`;

const StyledSectionLabel = styled.div`
	/* @media (min-width: ${(p) => p.theme.screenWidthMd}) { */
		display: flex;
		justify-content: space-between;
		padding: ${(p) => p.theme.lenMd3} 0;
		margin: 0 ${(p) => p.theme.lenMd3};
		color: ${(p) => p.theme.colorNavbarLabel};
		font-size: ${(p) => p.theme.lenMd1};
        transition: 0.3s;
        cursor: pointer;
        &:hover{
            color: ${(p) => p.theme.colorNavbarLink};
        /* } */
		${
			'' /* display: block;
		padding: ${(p) => p.theme.lenSm3} ${(p) => p.theme.lenSm3};
		margin:  ${(p) => p.theme.lenSm2} ${(p) => p.theme.lenSm2};
		color: ${(p) => p.theme.colorNavbarLabel};
		font-size: ${(p) => p.theme.lenMd1};
        background: ${(p) => p.theme.colorPrimary};
		color: ${(p) => p.theme.colorPrimaryText};
		font-size: ${(p) => p.theme.lenMd1};
		border-radius: ${(p) => p.theme.lenLg1}; */
		}
	}
`;
const StyledNavLinkButton = styled.span`
	position: relative;
	display: flex;
	align-items: center;
	white-space: nowrap;
	/* padding: 0 ${(p) => p.theme.lenMd3}; */
	height: ${(p) => p.theme.lenLg2};
	color: ${(p) => p.theme.colorNavbarLink};
	/* background: ${rgba('white', 0.2)}; */
	/* border-radius: ${(p) => p.theme.borderRadius}; */

	/* @media (min-width: ${(p) => p.theme.screenWidthMd}) { */
		background: transparent;
		height: auto;
		font-size: ${(p) => p.theme.lenMd1};
		padding: ${(p) => p.theme.lenSm3} ${(p) => p.theme.lenMd2};
		width: 100%;
		border-radius: ${(p) => p.theme.lenLg1};
	/* } */
`;

const StyledBadge = styled(Badge)`
	position: absolute;
	z-index: 3;
	top: 50%;
	right: ${(p) => p.theme.lenMd2};
	transform: translateY(-50%);
`;

const StyledNavLink = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	/* height: ${(p) => p.theme.lenXl1}; */
	/* padding: ${(p) => p.theme.lenMd1} ${(p) => p.theme.lenSm2} ${(p) => p.theme.lenMd1} 0; */
    transition: all .5s ease;

	&.active ${StyledNavLinkButton} {
		background: ${(p) => p.theme.colorPrimary};
		color: ${(p) => p.theme.colorPrimaryText};
	}

	& ${StyledBadge} {
		display: none;
	}

	/* @media (min-width: ${(p) => p.theme.screenWidthMd}) { */
		padding: 0 ${(p) => p.theme.lenMd3};
		height: auto;
		margin-bottom: ${(p) => p.theme.lenSm2};

		&.active ${StyledNavLinkButton} {
			color: #fff;

			& ${StyledBadge} {
				display: block;
			}
		}
	/* } */
`;
export default function NavbarDrop() {
	const [isOpenNavDrop, setIsOpenNavDrop] = useState(false);
	return (
        <StyledScrollbarWrapper>
			<StyledSectionLabel isOpenNavDrop={isOpenNavDrop} onClick={()=>{setIsOpenNavDrop(!isOpenNavDrop)}}>
				<span>Dashboard</span>
				{isOpenNavDrop ? <i className="uil uil-angle-down"></i> : <i className="uil uil-angle-right"></i>}
			</StyledSectionLabel>
			{isOpenNavDrop && (
				<>
					<StyledNavLink exact={true} to="/">
						<StyledNavLinkButton>
							Home
							<StyledBadge fill="white" />
						</StyledNavLinkButton>
					</StyledNavLink>
					<StyledNavLink to="/about">
						<StyledNavLinkButton>
							About
							<StyledBadge fill="white" />
						</StyledNavLinkButton>
					</StyledNavLink>
				</>
			)}
            </StyledScrollbarWrapper>
	);
}
