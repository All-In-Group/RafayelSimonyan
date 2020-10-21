
function getToggle(e) {
    document.querySelectorAll(".box").forEach(box => box.style.display = "none");
    document.getElementById(e).style.display = "block";
    
}