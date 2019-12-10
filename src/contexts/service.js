import React from 'react';

const ServiceContext = React.createContext(null);

export const ServiceProvider = ServiceContext.Provider;

export function useServices() {
  return React.useContext(ServiceContext);
}
