window.addEventListener("DOMContentLoaded", (event) => {
  var score = document.getElementById("score");
  var nbrNombre = 0;
  var txt = document.querySelector("p");
  console.log("txt", score)
  var btnmoins = document.getElementById("moins");
  var btnplus = document.getElementById("plus");
  var btnreset = document.getElementById("reset")

  btnplus.addEventListener("click", plus);
  btnmoins.addEventListener("click", moins);
  btnreset.addEventListener("click", reset);

  function plus()
  {
    nbrNombre++;
    score.textContent = nbrNombre;
  }
  
  function moins()
  {
    nbrNombre--;
    score.textContent = nbrNombre;
  }

  function reset()
  {
    nbrNombre=0;
    score.textContent = nbrNombre;
  }
})
