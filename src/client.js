import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { AppContainer } from 'react-hot-loader';
import createStore from './store';

import { INCREMENT } from './modules/counter';

// global styles
import './styles';

// components
import App from './components/App';

const store = createStore();

// Init Apollo
const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:3000/graphql',
});
const apolloClient = new ApolloClient({
  networkInterface,
});

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) });
}
