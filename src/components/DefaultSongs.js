import React, { useEffect } from "react";
import axios from "axios";

import DisplaySongs from "./DisplaySongs";

/**
 * Renders a component that displays a list of default songs.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.defaultSongs - The array of default songs.
 * @param {Function} props.setDefaultSongs - The function to set the default songs.
 * 
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function DefaultSongs(props) {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (props.defaultSongs.length === 0) {
      axios
        .get("default-songs")
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
