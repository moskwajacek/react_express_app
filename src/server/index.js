import React from 'react';
import ReactDOMServer from 'react-dom/server';

import templateFn from './templete.js';
import App from '../client/components/app.jsx';

export default (req, res) => {
    const html = ReactDOMServer.renderToString(
        <App />
    );
    const template = templateFn(html);
    res.send(template);
};