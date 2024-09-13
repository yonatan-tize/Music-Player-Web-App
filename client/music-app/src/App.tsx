/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import HeaderBar from "./components/HeaderBar"
import SideBar from "./components/SideBar"
import MainBody from "./components/MainBody"

const mainpart = css`
  display: flex;
  background-color: gray;
`

const headerComponent = css`
  height: 60px;
`

const sideBarComponent = css`
  width: 200px;
`
function App() {

  return (
    <>
      <div css={headerComponent}>
        <HeaderBar />
      </div>
      <div css={mainpart}>
        <div css={sideBarComponent}>
          <SideBar />
        </div>
        <MainBody />
      </div>
    </>
  )
}

export default App
