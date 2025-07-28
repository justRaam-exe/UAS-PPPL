document.addEventListener('alpine:init', () => {
      Alpine.data('blogData', () => ({
        keyword: '',
        kategori: 'all',
        artikelList: [
          {
            judul: '5 Tips Memesan Makanan Online yang Aman',
            kategori: 'tips',
            durasi: 3,
            deskripsi: 'Pelajari cara aman dan nyaman memesan makanan secara daring.',
            gambar: 'assets/img/blog1.jpg'
          },
          {
            judul: 'Promo Akhir Tahun Yukihira: Diskon Hingga 50%',
            kategori: 'promo',
            durasi: 2,
            deskripsi: 'Manfaatkan promo menarik akhir tahun hanya di Yukihira Dining!',
            gambar: 'assets/img/blog2.jpg'
          },
          {
            judul: 'Rekomendasi Menu Musim Hujan',
            kategori: 'tips',
            durasi: 4,
            deskripsi: 'Menu-menu hangat dan nikmat untuk menemani musim hujan Anda.',
            gambar: 'assets/img/blog3.jpg'
          }
        ],
        get filtered() {
          return this.artikelList.filter(a => {
            return (this.kategori === 'all' || a.kategori === this.kategori) && a.judul.toLowerCase().includes(this.keyword.toLowerCase());
          });
        }
      }));
    });