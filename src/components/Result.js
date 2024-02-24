import React, { useState } from "react";

import DisplaySongs from "./DisplaySongs";
import DisplaySingers from "./DisplaySingers";
import DefaultSingers from "./DefaultSingers";
import DefaultSongs from "./DefaultSongs";
import Banner from "./Banner";

export default function Result(props) {
  const [defaultSongs, setDefaultSongs] = useState([]);
  const [defaultSingers, setDefaultSingers] = useState([]);
  const status = props.response.status;
  const data = props.response.data;

  let message = '';

  if (status === 204) {
    message = `Sorry, we couldn't find anything for "${props.searchTerm}".`;
  } else if (status === 400) {
    message = "Oops! something went wrong. Your request might have contained invalid characters.";
  } else {
    message = "Oops! something went wrong. We're experiencing some technical difficulties.";
  }

  console.log(status);

  return (
    <div>
      { status === 200 ? (
        props.isSong ? <DisplaySongs data={data} /> : <DisplaySingers data={data} />
      ) : (
        <>
          {props.searchTerm !== "" && !props.isLoading && <Banner msg={message} />}
          {props.isSong ? 
          <DefaultSongs defaultSongs={defaultSongs} setDefaultSongs={setDefaultSongs} /> : 
          <DefaultSingers defaultSingers={defaultSingers} setDefaultSingers={setDefaultSingers} />}
        </>
      )}
    </div>
  );
}
