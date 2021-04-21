import React, { useState } from "react";

const context = React.createContext({
  errorMessage: "",
  updateErrorMessage: () => {},
});

export function getErrorContext() {
  return context;
}

export default function ErrorProvider({ children }) {
  const [errorMessage, setErrorMesage] = useState("");
  const ErrorContext = getErrorContext();

  const updateErrorMessage = (message) => {
    setErrorMesage(message);
  };

  const providerValue = {
    errorMessage,
    updateErrorMessage,
  };
  return (
    <ErrorContext.Provider value={providerValue}>
      {children}
    </ErrorContext.Provider>
  );
}
