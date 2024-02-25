import React, { useState } from "react";

import DisplaySongs from "./DisplaySongs";
import DisplaySingers from "./DisplaySingers";
import DefaultSingers from "./DefaultSingers";
import DefaultSongs from "./DefaultSongs";
import Banner from "./Banner";

export default function Result(props) {
  const [defaultSongs, setDefaultSongs] = useState([]);
  const [defaultSingers, setDefaultSingers] = useState([]);
  let status = 0;
  let data = null;
  let message = '';

  if (props.response) {
    data = props.response.data;
    status = props.response.status;
  } 

  if (status === 204) {
    message = `Sorry, we couldn't find anything for "${props.searchTerm}".`;
  } else if (status === 400) {
    message = "Oops! something went wrong. Your request might have contained invalid characters.";
  } else if (status === 0){
    message = "Oops! The backend server seems to be down. Please try again later.";
  } else {
    message = "Oops! something went wrong. We're experiencing some technical difficulties.";
  }

  return (
    <div>
      { status === 200 ? (
        props.isSong ? <DisplaySongs data={data} /> : <DisplaySingers data={data} />
      ) : (
        <>
          {props.searchTerm !== "" && !props.isLoading && <Banner msg={message} setSearchTerm={props.setSearchTerm} />}
          {props.isSong ? 
          <DefaultSongs defaultSongs={defaultSongs} setDefaultSongs={setDefaultSongs} /> : 
          <DefaultSingers defaultSingers={defaultSingers} setDefaultSingers={setDefaultSingers} />}
        </>
      )}
    </div>
  );
}
