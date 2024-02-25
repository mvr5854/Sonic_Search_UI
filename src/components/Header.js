import React, { useState } from "react";
import axios from 'axios';

import Loading from "./Loading";

import style from '../styles/Header.module.css';

export default function Header(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [errMsg, setErrMsg] = useState("");

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  const songBtnClass = props.isSong ? `${style.toggle_btn} ${style.active}` : style.toggle_btn;
  const singerBtnClass = props.isSong ? style.toggle_btn : `${style.toggle_btn} ${style.active}`;

  function handleSubmit(event) {
    event.preventDefault();

    getResults();
    props.setSearchTerm(searchTerm);
    setSearchTerm("");
    setErrMsg("");
    props.setIsLoading(true);
  };

  function handleToggle() {
    props.setIsSong(!props.isSong);
    props.setSearchTerm("");
    setErrMsg("");
    props.setResponse({});
  }

  function getResults() {
    const url = props.isSong ? `song?title=${searchTerm}` : `singer?name=${searchTerm}`;

    axios.get(url)
      .then(response => {
        props.setResponse(response);
        console.log(response);
      })
      .catch(error => {
        props.setResponse(error.response);
        console.log(error.response);
      })
      .finally(() => {
        props.setIsLoading(false);
      });
  }

  function handleInputChange(event) {
    const input = event.target.value;
    if (validateInput(input)) {
      setSearchTerm(input);
      setErrMsg("");
    } else {
      const lastChar = input.charAt(input.length - 1);
      setErrMsg(`"${lastChar}" is not a valid character.`)
    }
  }

  function validateInput(input) {
    const regex = /^[a-zA-Z0-9_,?!()'-\s]*$/;
    return regex.test(input);
  }

  return (
    <>
      {props.isLoading && <Loading />}
      <div className={style.header}>
        <div className={style.site_title}>
          <h1>Sonic Search</h1>
        </div>
        <div className={style.search_bar_container}>
          <div className={style.toggle_switch}>
            <button className={songBtnClass} onClick={handleToggle}>Song</button>
            <button className={singerBtnClass} onClick={handleToggle}>Singer</button>
          </div>
          <form className={style.search_bar} onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder={props.isSong ? "Enter the title of a song" : "Enter the name of a singer"}
              required
            />
            <button type="submit">Search</button>
            {errMsg && <div className={style.error_msg}>{errMsg}</div>}
          </form>
        </div>
      </div>
    </>
  );
}
