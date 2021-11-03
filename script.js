  //This function works when you click on the square
  function squareClick()
  {
      //We reach the square div element by using DOM
      var square = document.getElementById("changingSquare");

      //Creating colors for RGB
      var blue = Math.round(Math.random()*255);
      var red = Math.round(Math.random()*255);
      var green = Math.round(Math.random()*255);

      //Creating random size for Square
      var size = Math.round(Math.random()*500);
      
      //We create a random color and set to the backgroundcolor
      var backGroundColor = "rgb("+ red + "," + green + "," + blue + ")";
      
      //We set the attributes such as backgroundcolor, width, height
      square.style.backgroundColor = backGroundColor;
      square.style.width = size + "px";
      square.style.height = size + "px";
      square.style.position = "relative";

      //We get the sizes of the viewport and set them to our new variables
      var windowHeight = window.innerHeight;
      var windowWidth = window.innerWidth;
      
      //We get the width and height of our square and set them to our new variables
      var divHeight = square.clientHeight;
      var divWidth = square.clientWidth;

      //We specify the random location that should be, so the square doesn't go out the window
      var randomPositionHeight = Math.round(Math.random() * (windowHeight - divHeight));
      var randomPositionWidth = Math.round(Math.random() * (windowWidth - divWidth));

      //We set the location values
      square.style.top = randomPositionHeight + "px" ;
      square.style.left = randomPositionWidth + "px";
  }
