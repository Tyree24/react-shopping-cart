import { createContext, useState } from 'react';

import data from '../data.js';

// Product Context
export const ProductContext = createContext();
export const ProductContextProvider = props => {
    const [products] = useState(data);

    return (
        <ProductContextProvider value={[products]}>
            {props.children}
        </ProductContextProvider>
    );
}