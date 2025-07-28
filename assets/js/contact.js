// Fungsi submit form manual setelah validasi Alpine
    window.submitForm = function() {
      // Ambil data form
      const nama = document.getElementById('nama').value;
      const email = document.getElementById('email').value;
      const pesan = document.getElementById('pesan').value;
      // Simulasi pengiriman & reset form
      alert('Pesan terkirim!\n\nNama: ' + nama + '\nEmail: ' + email + '\nPesan: ' + pesan);
      document.getElementById('contactForm').reset();
      // Scroll ke Google Maps setelah submit sebagai contoh interaksi
      document.getElementById('googleMap').scrollIntoView({behavior:'smooth'});
    }