// --- PUSAT DATA LINK SHORTENER ---
// Format: "kode_pendek": "URL_TUJUAN_LENGKAP"
const databaseLink = {
    "tugasphp": "https://drive.google.com/file/d/19qmfRFgTi9Mdp8WdF_B240m1reF9q3st/view?usp=sharing",
    "modulphp": "https://github.com/username/repo/raw/main/Modul_Latihan_PHP_Kelas_XI_RPL.pdf",
    "ujian": "https://forms.gle/contohlinkgoogleform",
    "grup": "https://chat.whatsapp.com/contohlinkgrup"
};

// Fungsi otomatis untuk melakukan redirect jika parameter / kode ditemukan
function prosesRedirect() {
    const path = window.location.search.substring(1); 
    
    if (path && databaseLink[path]) {
        window.location.replace(databaseLink[path]);
    } else if (path) {
        document.getElementById("status-pesan").innerHTML = 
            `<span style="color: red;">Maaf, link pendek <b>?${path}</b> tidak ditemukan!</span>`;
    } else {
        document.getElementById("status-pesan").innerHTML = 
            `Silakan masukkan parameter link pada URL.`;
    }
}
