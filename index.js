
function getToggle(e) {
    document.querySelector('.modal-bg').classList.add('active');
    document.querySelectorAll(".box").forEach(box => box.style.display = "none");
    document.getElementById(e).style.display = "block";
}

function closeModal() {
    const close = document.querySelector('.modal-bg')
    close.classList.remove('active')
}