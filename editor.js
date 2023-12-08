var filename;

function readFile(file) {
  var reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("input").value = e.target.result;
    updateOutput();
  };
  filename = file.name;
  reader.readAsText(file);
}

function updateOutput() {
  document.getElementById("output").innerHTML = document.getElementById("input").value;
}

function saveFile() {
  var text = document.getElementById("input").value;
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename);
}

