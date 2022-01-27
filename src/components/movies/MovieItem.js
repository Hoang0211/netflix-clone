import React from "react";

import classes from "./MovieItem.module.css";

function MovieItem(props) {
  return (
    <div className={classes["movie-item"]}>
      <img
        src="https://th.bing.com/th/id/R.f85de97d4a19890a4586abf5a6772415?rik=Mp5Svjv2tjfe2w&pid=ImgRaw&r=0"
        alt=""
      />
      <div className={classes["movie-info"]}></div>
    </div>
  );
}

export default MovieItem;
