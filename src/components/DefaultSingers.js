import React, { useEffect } from "react";
import axios from "axios";

import DisplaySingers from "./DisplaySingers";

/**
 * Renders a component that displays a list of default singers.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.defaultSingers - The array of default singers.
 * @param {Function} props.setDefaultSingers - The function to set the default singers.
 * 
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function DefaultSingers(props) {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (props.defaultSingers.length === 0) {
      axios
        .get("default-singers")
        .then((response) => {
          response.status === 200 && props.setDefaultSingers(response.data);
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
      {props.defaultSingers.length > 0 && (
        <div className="sub_title">
          <h2>Here are Some Artists You Might Like</h2>
        </div>
      )}
      <DisplaySingers data={props.defaultSingers} />
    </div>
  );
}
