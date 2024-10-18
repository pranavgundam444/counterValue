let count = 0;

document.getElementById("btn").onclick = function() {
    count += 1;
    document.getElementById("span").innerHTML = count;
}

document.getElementById("decrease").onclick = function() {
    count -= 1;
    document.getElementById("span").innerHTML = count
}

document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById("span").innerHTML = count;
}

