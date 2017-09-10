import path from 'path';
import express from 'express';
import chalk from 'chalk';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router';
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from 'react-apollo';
import { Provider } from 'react-redux';
import {
  ServerStyleSheet,
  StyleSheetManager
} from 'styled-components';

import template from './assets/index.pug';
import createStore from './store';
import App from './components/App';

const app = express();
app.use('/', express.static(path.resolve('dist/public')));

app.get('*', (req, res) => {

  const apolloClient = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:3000/graphql',
    }),
  });

  const store = createStore(apolloClient);

  // Initilize an empty sheet for collecting styles after render
  const sheet = new ServerStyleSheet();

  const context = {};

  // The client-side app will instead use <BrowserRouter>
  const output = ReactDOMServer.renderToString(
    <ApolloProvider client={apolloClient} store={store}>
      <StaticRouter location={req.url} context={context}>
        <StyleSheetManager sheet={sheet.instance}>
          <App />
        </StyleSheetManager>
      </StaticRouter>
    </ApolloProvider>
  );

  // Collect styles to prevent FLOUC (server side styled-component)
  const styleTags = sheet.getStyleTags();


  // Render pug template to HTML
  const locals = {
    output,
    head: styleTags,
    body: `<script src="/app.bundle.js"></script>`
  };
  const html = template(locals);

  // send to client
  res.send(html);
});


app.listen(3003, () =>
  console.log(chalk.green.bold`SERVER STARTED!`)
);
