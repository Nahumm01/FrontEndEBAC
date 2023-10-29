document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sorteador").addEventListener("submit",function(evento) {
    evento.preventDefault();

    let maxNum = document.getElementById("max-num").value;
    maxNum = parseInt(maxNum);

    let randomNum = Math.random() * maxNum;
    randomNum = Math.floor(randomNum + 1)

    document.getElementById("spanResult").innerText = randomNum;
    document.querySelector(".resultado").style.display ="block"
  });
});
