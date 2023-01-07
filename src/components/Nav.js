import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">CustomSolo</Link>
        </li>
        <li>
          <Link to="/rankflip">RankFlip</Link>
        </li>
        <li>
          <Link to="rank">Rank</Link>
        </li>
        <li>
          <Link to="skin">Skin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
