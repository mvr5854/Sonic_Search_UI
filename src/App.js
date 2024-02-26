import React, { useState } from "react";

import Result from "./components/Result";
import Header from "./components/Header";

/**
 * The main component of the application.
 * It manages the state of the search term, response data, loading status, and song flag.
 * Renders the Header and Result components.
 * 
 * @returns {JSX.Element} The main component of the application.
 */
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSong, setIsSong] = useState(true);

  return (
    <div className="app">
      <div className="app_header">
        {/* Renders the Header component */}
        <Header
          setResponse={setResponse}
          isSong={isSong}
          setIsSong={setIsSong}
          setSearchTerm={setSearchTerm}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
      <div className="app_body">
        {/* Renders the Result component */}
        <Result
          response={response}
          isSong={isSong}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
