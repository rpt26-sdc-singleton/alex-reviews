import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });
// var jsdom = require('mocha-jsdom');

// global.document = jsdom({
//   url: 'http://localhost:3000/'
// });

import App from '../client/components/App';

// let rootContainer;

// beforeEach(() => {
//   rootContainer = document.createElement('div');
//   document.body.appendChild(rootContainer);
// });

// afterEach(() => {
//   document.body.removeChild(rootContainer);
//   rootContainer = null;
// });

describe('App mounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div'); // create the div here
    ReactDOM.render(<App />, div);
  });


});