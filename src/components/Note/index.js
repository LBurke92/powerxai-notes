import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAuth, LoginStatus } from "../Login/authslice";
import { postNote, getNote } from "../../axios/index";
import { findByLabelText } from "@testing-library/react";

export function Note() {
  const auth = useAppSelector(selectAuth);

  if (auth.status !== LoginStatus.LOGGED_IN) return null;
  const {
    apiToken,
    user: { id: userId },
  } = auth;

  return (
    <div>
      <NoteField userId={userId} />
    </div>
  );
}

function NoteField({ userId }) {
  //on first render a call should be made to pull in the notes from server and update state
  const [note, setNote] = useState(["Note goes here..."]);
  const handleSubmit = () => {
    console.log("submit");
    // make a call to API to post note
    // postNote({ note, userId });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNote(event.target.value);
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "66%",
    margin: "auto",
    padding: "10px",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <textarea value={note} onChange={handleChange}></textarea>
      <input type="submit" value="submit"></input>
    </form>
  );
}
