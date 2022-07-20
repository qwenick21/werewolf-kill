import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

class Role1 extends React.Component {
  render() {
    const title = <p>敬請期待!</p>;
    return (
      <div>
        <Link to="/">
          <Button variant="contained" color="secondary">
            回首頁
          </Button>
        </Link>
        {title}
      </div>
    );
  }
}

export default Role1;
