import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import {SideBarProvider} from "./context/SideBarContext.tsx";
import {PrimeReactProvider} from "primereact/api";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <PrimeReactProvider>
          <SideBarProvider>
              <App />
          </SideBarProvider>
      </PrimeReactProvider>
  </React.StrictMode>
)
