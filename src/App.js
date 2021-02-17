import './App.css';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Social from './components/layout/Social';
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';
import Book from './components/home/Book';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/book/:id" component={Book} />
          <Social />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
