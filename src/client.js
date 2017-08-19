import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { AppContainer } from 'react-hot-loader';
import createStore from './store';

// global styles
import './styles';

// components
import App from './components/App';

// Init Apollo
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
  }),
});

const store = createStore(apolloClient);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider store={store} client={apolloClient}>
        <App />
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('root')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) });
}
