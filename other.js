function hideStart() {
    let hide = document.getElementById("startup");
    hide.style.opacity = 0;
    hide.nextElementSibling.style.opacity = 0;
    setTimeout(() => {
        hide.style.display = 'none';
        hide.nextElementSibling.style.display = 'none';
    }, 1000)
}


// Disabling and enabling the button
let strtBtn = document.getElementById('frmBtn');
let frmName = document.getElementById("frmName");

frmName.addEventListener('input', () => {
    document.getElementById("frmBtn").style.pointerEvents = 'all';
});

