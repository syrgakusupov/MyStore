import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ModalState} from "./utils/Context";
import {SkeletonTheme} from "react-loading-skeleton";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <BrowserRouter>
              <ModalState>
                  <App />
              </ModalState>
      </BrowserRouter>
  </SkeletonTheme>
);


