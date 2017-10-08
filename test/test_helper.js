import _$ from 'jquery';
// import react if using jsx context
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// *** set up testing environment to run like a browser in the command line ***
// similar to window.document, this will create the html dom and set it up
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// set up window based on the fake document set up above
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
// prevent jquery from trying to access the regular dom but only access the
// fake global.window dom that we defined above
const $ = _$(window);

// *** set up chai-jquery ***
chaiJquery(chai, chai.util, $);

// *** build 'renderComponent' helper that should render a given react class ***
// function to create an instance of a React Class
function renderComponent(ComponentClass, props = {}, state = {}) {
  // render an instance of the component and instantiate the store inside a Provider
    const componentInstance =  TestUtils.renderIntoDocument(
      <Provider store={createStore(reducers, state)}>
        <ComponentClass {...props} />
      </Provider>
  );

  // find the dom node of our component instance and produces an HTML
  return $(ReactDOM.findDOMNode(componentInstance));
}

// *** build helper for simulating events ***
$.fn.simulate = function(eventName, value) {
  // check if a value is passed in
  if (value) {
    // set value for the element, jquery method
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
