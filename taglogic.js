if (typeof(Storage) !== "undefined") {
  // browser has Web Storage support > code



} else {
  //no Web Storage support > error message
  document.write("Web Storage is unsuported on this browser. Please try updating it to its latest version, or using another one.")
}
