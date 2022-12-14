import React from 'react';
import ReactDOM from 'react-dom/client';
import {css, Global} from '@emotion/react'
// @ToDo: Inject styles as docs
import normalize from './globals/normalize.css'
import fonts from './globals/fonts.css'
import {Provider} from "react-redux";
import {store} from "./store";
import Default from "./pages/default";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Global styles={css`
          ${normalize}
          ${fonts}
        `}/>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                   <Route path="/" element={<Default/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
