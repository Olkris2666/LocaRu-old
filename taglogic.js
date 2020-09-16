if (typeof(Storage) !== "undefined") {
  // executes page code only if web storage features are supported
  
  function saveTags(currentTags) {
    localStorage.setItem("tags", currentTags.join(","));
  }
  // stores given parameter to localStorage in string format

  function loadTags() {
    if (localStorage.getItem("tags") !== null) {
      var tagString = localStorage.getItem("tags");
      var tagArray = tagString.split(",");
    }
    // converts the tag string into an array
    else {
      var tagArray = [];
    }
    // creates an empty array
    return tagArray;
  }
  // returns saved tags as an array

  function addTag(userInput) {
    currentTags = loadTags();
    currentTags.push(userInput);
    saveTags(currentTags);
  }
  // saves the given parameter at the end of the localStorage tag string

  // Deletes a tag in the tags array
  function deleteTag(tagNumber) {
    currentTags = loadTags();
    currentTags.splice(tagNumber, 1);
    saveTags(currentTags);
  }

  // Clears all the tags in the array
  function deleteAllTags() {
    localStorage.removeItem("tags");
    currentTags = loadTags()
    showTags()
  }


  // Display the tags on the page
  function showTags() {
    document.getElementById("tagView").innerHTML = currentTags;
  }
  
  // On load function that loads the tags from local storage then displays them
  function PageOnLoad() {
      currentTags = loadTags()
      saveTags(currentTags)
      showTags()
  }

} else {
  document.write("Web Storage is unsuported on this web browser. Please try updating it to its latest version, or using another one.");
}
// gives an eror message if web storage features are not supported
