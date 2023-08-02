import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from './App'; // Assuming this is your main App component
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './Redux/Store';
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      <ToastContainer />
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
