import React from "react";
import Role from "./Role";
import Role1 from "./Role1";
import Grid from "@mui/material/Grid";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    const title = <h1>NL的狼人殺小教室</h1>;
    return (
      <Grid container direction="column" alignItems="center">
        {title}
        <Routes>
          <Route path="/" element={<Role />} />
          <Route path="role1" element={<Role1 />} />
        </Routes>
      </Grid>
    );
  }
}

export default App;
