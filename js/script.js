// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: Mar 2024
// This file contains the JS functions for index.html

/**
 * This function gets users street number and street name and shows it back to user.
 */
function doMathClicked() {
  // input
  const length = parseInt(document.getElementById("length").value)
  const width = parseInt(document.getElementById("width").value)
  const height = parseInt(document.getElementById("height").value)
  // output
  document.getElementById("user-info").innerHTML =
    "<p>The volume of a rectangular prism is: " + length * width * height + "cm³. </p>"
}
