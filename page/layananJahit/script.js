$(document).ready(function () {
  $("form").submit(function (event) {
    // Menghentikan aksi default pengiriman form
    event.preventDefault();

    // Menangkap nilai dari input form
    let barang = $(".card-title").text();
    let nama = $("#nama").val();
    let telp = $("#telp").val();
    let tgl_lahir = $("#tgl").val();
    let jabatan = $("#jabatan").val();
    let sum = $("#sum").val();

    // Format pesan WhatsApp
    var message =
      "Halo, saya ingin memesan:\n" +
      "Kaos: " +
      barang +
      "\n" +
      "Nama: " +
      nama +
      "\n" +
      "No. Telpon: " +
      telp +
      "\n" +
      "Tanggal Lahir: " +
      tgl_lahir +
      "\n" +
      "Jabatan: " +
      jabatan +
      "\n" +
      "Jumlah Pesanan: " +
      sum;

    // Membuat URL untuk WhatsApp
    var whatsapp_url =
      "https://api.whatsapp.com/send?phone=6285156262237&text=" +
      encodeURIComponent(message);

    // Buka halaman WhatsApp dalam tab baru
    window.open(whatsapp_url, "_blank");
  });
});
