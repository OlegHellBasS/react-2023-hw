import React, {createContext, useState} from 'react';
import {Child1} from "./components/Child1/Child1";
import {Child2} from "./components/Child2/Child2";

export const SimpsonContext = createContext(null)

const App = () => {
   const [simpson, setSimpson] = useState([])
    return (
        <SimpsonContext.Provider value={{simpson, setSimpson}}>
        <div>
            <Child1/>
            <hr/>
            <Child2/>
        </div>
        </SimpsonContext.Provider>
    );
};

export default App;
