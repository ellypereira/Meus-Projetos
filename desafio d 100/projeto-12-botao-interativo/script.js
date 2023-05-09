var btn = document.getElementById("sim");
btn.addEventListener("mouseover", function() {
    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 500);
    btn.style.left = x + "px";
    btn.style.top = y + "px";
});

var btnSim = document.getElementById("nao");
btnSim.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=ci_agxmBMao";
});
