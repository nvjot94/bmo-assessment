import React from 'react';

import { shallow } from 'enzyme';
import AboutMe from './about';

describe('Tests for the about component', () => {
	const component = shallow(<AboutMe />);
	it('renders exact number of paragraphs - 4', () => {
		const paragraphs = component.find('p');
		expect(paragraphs.length).toBe(4);
	});

	it('renders the heading properly', () => {
		const paragraphs = component.find(`[data-testid='heading']`);
		expect(paragraphs.text()).toBe('About Us');
	});
});
