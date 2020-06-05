import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import RestaurantList from '../restaurantList';
import store from '../../../Store';
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
    act(() => {
      render(<Provider store={store}><RestaurantList  /></Provider>, container);
    });
    expect(container.textContent).toBe("Total Results : 0");
  
  
  });