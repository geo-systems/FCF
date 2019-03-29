import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/app';

export const startRenderProcess = () => {
    ReactDOM.render(<App />, document.getElementById('App'));
};
