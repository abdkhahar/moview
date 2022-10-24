var ingin = confirm("Apakah Anda ingin mengunjungi Moview?");

if (ingin) {
    window.alert("Welcome to Moview, semoga hari Anda menyenangkan!");
} else {
    window.alert("Baiklah, terima kasih telah konfirmasi, semoga hari Anda menyenangkan!");
}

/* Style of Arrow Icon for Back To Top */

document.getElementById("arrow").style.width = "5%";
document.getElementById("arrow").style.float = "right";
document.getElementById("arrow").style.filter = "drop-shadow(0 0 10px goldenrod) drop-shadow(0 0 5px white)";