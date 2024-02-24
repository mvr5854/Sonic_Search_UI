import React, { useState } from "react";

import Result from "./components/Result";
import Header from "./components/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSong, setIsSong] = useState(true);

  return (
    <div className="app">
      <div className="app_header">
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
        <Result response={response} isSong={isSong} searchTerm={searchTerm} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
