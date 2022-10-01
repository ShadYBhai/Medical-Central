import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const SellPage = () => {
  return (
    <>
      <Navbar />
      <Input>
        <label>
          Medicine Name <br />
          <input type="text" />
        </label>

        <label>
          Quantity <br />
          <input type="text" />
        </label>

        <label>
          Expiry Date <br />
          <input type="text" />
        </label>

        <label>
          Description <br />
          <textarea
            className=".queries"
            rows="5"
            cols="60"
            name="description"
            placeholder="Any details You would like to tell us ?"
          ></textarea>
        </label>
        <button className="btn" type="submit">
          SELL
        </button>
      </Input>
    </>
  );
};

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  label {
    text-transform: uppercase;
    font-weight: bold;
  }
  input {
    text-decoration: none;
    border: none;
    border-radius: 2rem;
    margin-bottom: 3rem;
    /* display: flex; */
    height: 3rem;
    width: 50rem;
    align-items: center;
  }
  textarea {
    text-decoration: none;
    border: none;
    border-radius: 2rem;
    margin-bottom: 3rem;
    margin-right: 12rem;
  }

  button {
    width: 20rem;
  }
`;

export default SellPage;
