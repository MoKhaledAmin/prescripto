/* eslint-disable react/prop-types */
import { createContext } from 'react';

// Assets
import { doctors } from '../assets/assets';

export const AppContext = createContext();

const AppContextprovider = (props) => {
    const currencySymbol = '$';

    const value = { doctors, currencySymbol };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextprovider;