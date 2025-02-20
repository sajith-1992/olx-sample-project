import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseContext } from './store/FirebaseContext';
import db from './firebase/config'
import { createRoot } from "react-dom/client";
import App from './App';

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
<FirebaseContext.Provider value={{ db }}>
<App />
</FirebaseContext.Provider>


);
