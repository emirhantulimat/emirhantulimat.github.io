function generateForLoop() {
    var loopText = "";
    for (var i = 0; i < document.getElementById("myText").value; i++) {
      loopText += " " + (i+1);
    }
    document.getElementById("loopOutput").value = loopText;
  }
  
  function changeColor() {
    document.getElementById("myText").style.color = "red";
    document.getElementsByTagName("p")[0].style.color = "red";
    document.getElementById("myButton2").style.backgroundColor = document.getElementById("colortext").value;    
  }