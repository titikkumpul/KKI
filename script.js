unction showProfile(){
  const notice = document.getElementById('notice');
  notice.innerHTML = '<strong>Profil Demo:</strong> tombol ini hanya menampilkan data contoh. Tidak terhubung ke database KKI atau sistem verifikasi resmi.';
  notice.scrollIntoView({behavior:'smooth', block:'center'});
}
