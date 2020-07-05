import React from 'react';
import ReactDOM from 'react-dom';
import BlackApp from './black-app/pages/BlackApp'
import WhiteApp from './white-app/pages/WhiteApp'

enum AppType {
  WHITE_APP = 1,
  BLACK_APP = 2
}

var appType = ((window as any).env.APP_TYPE);

if (appType === AppType.WHITE_APP) {
  ReactDOM.render(
    React.createElement(WhiteApp),
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    React.createElement(BlackApp),
    document.getElementById('root')
  );
}