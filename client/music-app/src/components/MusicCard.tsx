/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import Haileroot from '../assets/haileroot.jpg';
import { CiPlay1 } from "react-icons/ci";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "roboto", 'ariel';
}`

const musicCard = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(255, 191, 201, 0.5);
    border-radius: 20px;
    background-color: rgba(255, 191, 201, 0.2);
    margin-left: 1rem;
    padding: 5px; /* Optional for spacing */
`

const musicImage = css`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        border-radius: 10px; 
    }
`

const musicInfo = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 1rem; 
`

const musicTime = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30px;
    button{
        border: none;
    }
`
const musicPlayBtn = css`
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    &:hover{
        cursor: pointer;
    }
`
const musicDuration = css`
    padding: 0 10px;
`
const musicDetailBtn = css`
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    &:hover{
        cursor: pointer;
    }
`
const musicTitle = css`
    font-weight: 600;
`
const musicAuthor = css`
    font-weight: 300;
    font-size: 0.9rem;
`

const dropdownMenu = css`
  position: absolute;
  right: 10px;
  top: 40px;
  background-color: white;
  border: 1px solid rgba(255, 191, 201, 0.5);
  border-radius: 8px;
  width: 120px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 10;

  button {
    padding: 10px;
    background-color: white;
    border: none;
    text-align: left;
    cursor: pointer;

    &:hover {
      background-color: rgba(210, 210, 210, 0.2);
    }
  }
`;

interface MusicCardProps {
  changeIsDropDownopen: () => void;
  DropdownOpen: boolean;
}

function MusicCard({ changeIsDropDownopen, DropdownOpen }: MusicCardProps) {

  const activateDropDown = ()=>{
    changeIsDropDownopen()
  }

  return (
    <>
        <Global styles={GlobalStyles} />
        <div css={musicCard}>
            <div css={musicImage}>
                <img src={Haileroot} alt="haileroot" />
            </div>
            <div css={musicInfo}>
                <p css={musicTitle}>Music Title</p>
                <p css={musicAuthor}>Haile Root</p>
            </div>
            <div css={musicTime}>
                <button css={musicPlayBtn}><CiPlay1 /></button>
                <p css={musicDuration}>3:40</p>
                <button onClick={activateDropDown} css={musicDetailBtn}>
                    <IoEllipsisHorizontalOutline />
                </button>
                {DropdownOpen && (
                <div css={dropdownMenu}>
                    <button>Add to Playlist</button>
                    <button>Update</button>
                    <button>Delete</button>
                </div>
                )}
            </div>
        </div>
    </>
    
  )
}

export default MusicCard;