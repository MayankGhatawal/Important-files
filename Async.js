// Async Nature Code

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  async function myFunction() {return "Hello";}
  
  myFunction().then(
    function(value) {myDisplayer(value);}
  );