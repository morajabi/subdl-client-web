import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, createBatchingNetworkInterface } from 'react-apollo';
import { AppContainer } from 'react-hot-loader';
import createStore from './store';

// global styles
import './styles';

// components
import App from './components/App';

// Init Apollo
const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'http://localhost:3000/graphql',
    batchInterval: 15,
    batchMax: 15,
  }),
});

const store = createStore(apolloClient);

const render = Component => {
  ReactDOM.render(
    <ApolloProvider store={store} client={apolloClient}>
      <AppContainer>
        <Component />
      </AppContainer>
    </ApolloProvider>,
    document.getElementById('root')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) });
}
