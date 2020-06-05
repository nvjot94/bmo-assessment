import React from 'react';
import { render, fireEvent } from '@testing-library/react';


import Filter from './Filter';
import { Provider } from 'react-redux';
import store from '../../Store';




describe('on change event should work',()=>
{
it('should display a label and input elements with empty userName value', () => {

//act
const {getByTestId}=render(<Provider store={store}><Filter /></Provider>);
const element=getByTestId('filter-test-input');
expect(element.value).toEqual('');
});

it('should work on change event',()=>
{
    //act
    const {getByTestId}=render(<Provider store={store}><Filter /></Provider>);
    const element=getByTestId('filter-test-input');

    //assert
    fireEvent.change(element,{target:{value:'toronto'}});
    expect(element.value).toEqual('toronto');

});



});