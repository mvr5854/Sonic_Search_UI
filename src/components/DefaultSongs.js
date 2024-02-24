import React, { useEffect } from "react";
import axios from "axios";

import DisplaySongs from "./DisplaySongs";

export default function DefaultSongs(props) {
  useEffect(() => {
    if (props.defaultSongs.length === 0) {
      axios
        .get("http://localhost:8080/api/default-songs")
        .then((response) => {
          response.status === 200 && props.setDefaultSongs(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {props.defaultSongs.length > 0 && (
        <div className="sub_title">
          <h2>Explore These Featured Tracks</h2>
        </div>
      )}
      <DisplaySongs data={props.defaultSongs} />
    </div>
  );
}
