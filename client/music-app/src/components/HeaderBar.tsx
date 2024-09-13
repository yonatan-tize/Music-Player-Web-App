/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const containerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 100;
  margin-bottom: 1rem;

  padding: 10px;
  background-color: rgb(210, 210, 210);
  color: rgb(41, 0, 190);
  border-bottom: 1px solid rgb(255, 191, 201, 0.3);
`;

const pageTitle = css`
  margin: 3px;
  width: 150px;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
`;

const searchStyle = css`
  display: flex;
  flex: 1;
  margin-left: 20px;
  max-width: 700px;

  input {
    flex: 1;
    padding: 10px;
    padding-left: 20px;
    font-size: 1.2rem;
    border: 1px solid rgba(255, 191, 201, 0.1);
    border-right: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
    margin-left: -2px;
    cursor: pointer;
    color: black;
    font-size: 1.5rem;
    border: 1px solid rgba(255, 191, 201, 0.1);
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

const profileStyle = css`
  display: flex;
  justify-content: end;
  margin: 3px;
  width: 150px;
  font-size: 3rem;
  cursor: pointer;
`;

function HeaderBar() {
  return (
    <div css={containerStyle}>
      <div css={pageTitle}>My Music</div>
      <div css={searchStyle}>
        <input type="text" placeholder="What do you want to play?" />
        <button><CiSearch /></button>
      </div>
      <div css={profileStyle}>
        <CgProfile />
      </div>
    </div>
  );
}

export default HeaderBar;
