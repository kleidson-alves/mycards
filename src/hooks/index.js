import React from 'react';

import { CardProvider } from './useCard';

const AppProvider = ({ children }) => (
  <CardProvider>
    {children}
  </CardProvider>
);

export default AppProvider;
