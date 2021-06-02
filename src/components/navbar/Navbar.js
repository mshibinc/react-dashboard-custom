import React,{useState} from 'react';
import styled from 'styled-components';
import NavbarDrop from './NavbarDrop';

// import NavbarFooter from "./NavbarFooter";
// import NavbarLogo from "./NavbarLogo";
import NavbarNav from './NavbarNav';

const StyledWrapper = styled.div`
	width: 100%;
	background: ${(p) => p.theme.colorNavbar};
	color: white;
    transition: transform 0.35s;
    min-height:100vh;
    z-index: 6;
    transition: transform 0.35s;

    @media (max-width:${(p) => p.theme.screenWidthMd}){
        position: absolute;
        top:42px;
        transform: translateX(${(p) => (p.isMobileMenu ? 0 : "-100%")});
    }
	@media (min-width: ${(p) => p.theme.screenWidthMd}) {
		flex-direction: column;
		width: 220px;
		max-width: 220px;
		min-width: 220px;
	}
`;
const MobileNav = styled.div`
	width: 100%;
	background: ${(p) => p.theme.colorNavbar};
	padding: ${(p) => p.theme.lenSm3} 0;
	@media (min-width: ${(p) => p.theme.screenWidthMd}) {
		display: none;
	}
`;
const StyledIcon = styled.span`
	display: block;
	font-size: ${(p) => p.theme.lenMd2};
`;
const MobileMenuWraper = styled.div`
	margin: 0 ${(p) => p.theme.lenMd3} 0;
    display: flex;
	height: auto;
	justify-content: space-between;
`;
export default () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false)
	return (
		<>
			<MobileNav>
				<MobileMenuWraper>
					{isMobileMenu?<StyledIcon className="uli uil-multiply" onClick={()=>setIsMobileMenu(!isMobileMenu)}/>:<StyledIcon  onClick={()=>setIsMobileMenu(!isMobileMenu)} className="uli uil-bars"/>}
				</MobileMenuWraper>
			</MobileNav>
			<StyledWrapper isMobileMenu={isMobileMenu}>
				{/* <NavbarLogo /> */}

				<NavbarNav />
				<NavbarDrop />
				{/* <NavbarFooter /> */}
			</StyledWrapper>
		</>
	);
};
