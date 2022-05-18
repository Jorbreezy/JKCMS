import express from 'express';
import path from 'path';

// React Import to make it isomorphic
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from '../src/App';
import Head from '../src/web-components/Head';

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', async (req, res) => {
  const app = renderToString(React.createElement(App));
  const html = renderToStaticMarkup(React.createElement(Head, { markup: app }));

  res.send(html);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));