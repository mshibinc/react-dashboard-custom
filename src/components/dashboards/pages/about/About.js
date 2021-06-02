import React from 'react';
import styled from 'styled-components';
import { MyHeader, MyParagraph } from '../../../shared';

const About = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6 col-lg-6">
					<MyHeader title="About Page" subtitle="This is about page" />
					<MyParagraph>
						Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic
						or web designs. The passage is attributed to an unknown typesetter in the 15th century who is
						thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type
						specimen book.
					</MyParagraph>
				</div>
			</div>
		</div>
	);
};
export default About;
