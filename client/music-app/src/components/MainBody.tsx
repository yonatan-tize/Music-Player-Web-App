/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TopHits from '../assets/top-hits.jpg'
import HipHop from '../assets/Hip-hop.jpg'
import Rock from '../assets/rock-music.webp'
import Country from '../assets/country.jpg'
import MusicCard from "./MusicCard";
import { useState } from "react";

const cardContainer = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 1.5rem 0;
`
const musicCard = css`
    border: 1px solid rgba(255, 191, 201, 0.5);
    border-top: none;
    border-radius: 10px;
    max-width: 200px;
    img{
        width:100%;
    };
    p{
        padding: 5px;
    }
`
const mainBody = css`
    margin: 1rem auto;
    font-family: 'roboto', 'ariel';
`

function MainBody() {
  const [isDropdownOpen, setIsDropDownopen] = useState<boolean>(false);

  const activateDropDown = ()=>{
    setIsDropDownopen(!isDropdownOpen)
  }

  return (
    <div css={mainBody}>
        
        <div css={cardContainer}>
            <div css={musicCard}>
                <img src={TopHits} alt="tophit" />
                <p>Lorem ipsum dolor sepe do facere fuio?</p>
            </div>
            <div css={musicCard}>
                <img src={HipHop} alt="" />
                <p>Lorem ipsum dolor sepe do facere fuio?</p>
            </div>
            <div css={musicCard}>
                <img src={Rock} alt="" />
                <p>Lorem ipsum dolor sepe do facere fuio?</p>
            </div>
            <div css={musicCard}>
                <img src={Country} alt="" />
                <p>Lorem ipsum dolor sepe do facere fuio?</p>
            </div>

        
        </div>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
        <MusicCard changeIsDropDownopen = {activateDropDown} DropdownOpen={isDropdownOpen}/>
    </div>
    
  )
}

export default MainBody