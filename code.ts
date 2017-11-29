// var movieData = require("./data");
// var $ = require("jquery");

import * as $ from "jquery";
import {movieData} from "./data";

// handle data and stuff

function renderMovie(movie) {
    $("#poster").attr("src", movie.imageSrc);
    $("#title").text(movie.title);
    $("#text").text(movie.text);

    let actorList = "";
    for (let i of movie.actors) {
        const actor = movie.actors[i];
        actorList += ("<li>");
        actorList += actor;
        actorList += ("</li>");
    }
    $("#actorList").html(actorList);
}

renderMovie(movieData);

// Stars and stuff.....

function changeStarRating(grade) {
    for (let i = 1; i <= 5; i++ ) {
        $("#star" + i).removeClass("filledStar");
        $("#star" + i).addClass("emptyStar");
    }
    for (let i = 1; i <= grade; i++) {
        $("#star" + i).removeClass("emptyStar");
        $("#star" + i).addClass("filledStar");
    }
}

for (let i = 1; i <= 5; i++) {
      $("#star" + i).on("click", () => {
          changeStarRating(i);
      });
  }
