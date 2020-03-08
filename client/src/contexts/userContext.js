// userContext is basically the Store you would use in Redux.
import React from 'react';

export const userContext = React.createContext({});

export const Provider = userContext.Provider;
export const Consumer = userContext.Consumer;
