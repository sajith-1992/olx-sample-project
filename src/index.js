import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseContext,AuthContext } from './store/Context';

import {db,auth} from './firebase/config'
import { createRoot } from "react-dom/client";
import App from './App';

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
<FirebaseContext.Provider value={{ db ,auth}}>
<AuthContext>
<App />
</AuthContext>
</FirebaseContext.Provider>


);
