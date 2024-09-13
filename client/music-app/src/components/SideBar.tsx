/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoMdHome } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

// Sidebar container styling
const sidebarContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 200px;
  height: 100vh;
  padding: 20px;
  background-color: rgb(210, 210, 210);
  color: darkBlue;
  position: fixed;
  top: 60px;
  bottom: 0px;
  left: 0px;
  z-index: 100;
`;

// Individual sidebar item styling
const sidebarItem = css`
  display: flex;
  align-items:center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 1rem;
  
  &:hover {
    color: #61dafb;
  }

  svg {
    margin-right: 10px;  
    font-size: 1.5rem;      
  }
 `;

const myPlaylistHolder = css`
    width:100%;
    border-top: 2px solid rgba(255, 191, 201, 0.3);
`

function SideBar() {
  return (
    <div css={sidebarContainer}>
      <div css={sidebarItem}>
        <IoMdHome />
        <p>HOME</p>
      </div>
      <div css={sidebarItem}>
        <AiFillInfoCircle />
        <p>About</p>
      </div>
      <div css={sidebarItem}>
        <IoIosAddCircleOutline />
        <p>Add music</p>
      </div>
      <div css={[sidebarItem, myPlaylistHolder]}>
        <p>My Playlist</p>
      </div>
    </div>
  );
}

export default SideBar;
