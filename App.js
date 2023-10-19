import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store,{persistedStore} from './store';
import Products from './Products';
import Cart from './Cart';
import Header from './Header';
import './App.css'
import ProductsForm from './ProductsForm';
import GetProducts from './GetProducts';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
 
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductsForm" element={<ProductsForm/>} />
          <Route path="/GetProducts" element={<GetProducts/>}/>
        </Routes>
      </div>
    </Router>

    </PersistGate>
  </Provider>

);

export default App;