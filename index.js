function revString() {
  var inputString = document.getElementById("input").value;
  var revString = "";
  for (let i = inputString.length; i > 0; i--) {
    revString = revString.concat(inputString.slice(i - 1, i));
  }
  alert(revString);
}
