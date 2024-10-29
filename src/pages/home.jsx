import React from "react"
import Box from "../components/Box/box";

// const getNumberOfBoxes = () => Math.ceil(window.innerWidth / 100)

export function HomePage() {
  const [showSideBar, setShowSizeBar] = React.useState(true);
  const sizeBarContent = <> <Box /> <Box /> <Box /> </>;

  return (
    <div key={"Container"} style={{ height: "100%", display: "flex" }}>
      <div key={"sideBar"} style={{ width: "20%", display: "flex", gap: "1px", flexDirection: "column", visibility: showSideBar ? "hidden" : "visible" }}>
        {sizeBarContent}
      </div>
      <div key={"main"} style={{ width: "80%" }}>
        <div key={"navBar"} style={{ margin: "10px", marginTop: "0" }}>
          <Box fixWidth={true} onClick={() => setShowSizeBar(!showSideBar)} >
            <p style={{ color: "red", margin: "unset" }}> Hamburger </p>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
