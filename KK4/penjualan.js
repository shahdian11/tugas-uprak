new Vue({
    el: '#app',
    data: {
      storeName: 'NAMA TOKO/NAMA PENJUALAN',
      logoUrl: 'https://placehold.co/50x50',
      notaNumber: '12345',
      customerName: 'Saaaaaa',
      tanggal: 'DD/MM/YYYY',
      totalPayment: '300,000.00',
      kodeBarang: '',
      namaBarang: '',
      quantity: 2,
      diskon: '',
      bayar: '',
      items: [
        { id: '', nama: '', harga: '', qty: '', total: '' }
      ]
    },
    computed: {
      subTotal() {
        let subtotal = 0;
        this.items.forEach(item => {
          subtotal += parseFloat(item.total);
        });
        return subtotal.toFixed(2);
      },
      discountedTotal() {
        if (!this.diskon || isNaN(this.diskon)) return this.subTotal;
        const discount = parseFloat(this.diskon);
        const subtotal = parseFloat(this.subTotal);
        return (subtotal * (1 - discount / 100)).toFixed(2);
      },
      totalHarga() {
        return this.discountedTotal;
      },
      kembalian() {
        if (!this.bayar || isNaN(this.bayar)) return '';
        const bayar = parseFloat(this.bayar);
        const totalHarga = parseFloat(this.totalHarga);
        return (bayar - totalHarga).toFixed(2);
      }
    },
    methods: {
      removeItem(index) {
        this.items.splice(index, 1);
      },
      selesai() {
        // Lakukan operasi setelah tombol "Selesai" ditekan
      }
    }
  });