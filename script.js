alert("APLIKASI TIKET! \n Silahkan masukkan nama dan usia anda");

const nama = prompt("Masukkan nama anda : ");
const usia = parseInt(prompt("Masukkan usia anda : "));

if (usia > 13) {
    alert("Selamat Datang Di Studio Kami");
    const studio = prompt("Pilih Studio \n A : Studio A \n B : Studio B \n C : Studio C").toUpperCase();
    
    if (studio === 'A' || studio === 'B' || studio === 'C') {
        alert(`Tiket ${nama}, Studio ${studio}, Umur ${usia}`);
        alert("Terima kasih, Selamat Menikmati!");
    } else {
        alert("Studio tidak valid");
    }

} else {
    alert("Maaf, Anda tidak boleh masuk studio ini karena usia Anda kurang dari 13 tahun");
}