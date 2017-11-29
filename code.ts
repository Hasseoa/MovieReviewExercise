// imports
import * as angular from "angular";
import {movieData} from "./data";
import {Review} from "./interfaces";

// angular stuff

let app = angular.module("reviewApp", []);

app.controller("reviewController", ($scope) => {
  $scope.movie = movieData;
  $scope.rating = 0;
  $scope.filled = [false, false, false, false, false];
  $scope.changeStarRating = (newRating) => {
    for (let i = 1; i <= $scope.rating; i++) {
        $scope.filled[i] = false;
    }
    $scope.rating = newRating;
    for (let i = 1; i <= newRating; i++) {
        $scope.filled[i] = true;
    }
  };
  $scope.handleClick = (e) => {
      $scope.changeStarRating(e);
    };
});
