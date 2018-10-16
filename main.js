import React from 'react';
import ReactDOM from 'react-dom';
import MobileController from './screens/controllers/mobile-controller.jsx';
import mobileStore from './screens/store/mobile-store.js';
import mobileAction from './screens/actions/mobile-action.js';

ReactDOM.render(<MobileController store={mobileStore} action={mobileAction}/>, document.getElementById('app'));