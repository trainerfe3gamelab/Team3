$(document).ready(function () {
  $("form").submit(function (event) {
    // Menghentikan aksi default pengiriman form
    event.preventDefault();

    // Menangkap nilai dari input form
    let nama = $("#nama").val();
    let telp = $("#telp").val();
    let tgl = $("#tgl").val();
    let jabatan = $("#jabatan").val();

    // Format pesan WhatsApp
    var message =
      "Halo, saya ingin memesan:\n" +
      "Nama: " +
      nama +
      "\n" +
      "No. Telpon: " +
      telp +
      "\n" +
      "Tanggal Booking Proses: " +
      tgl +
      "\n" +
      "Jabatan: " +
      jabatan;

    // Membuat URL untuk WhatsApp
    var whatsapp_url =
      "https://api.whatsapp.com/send?phone=6285711064566&text=" +
      encodeURIComponent(message);

    // Buka halaman WhatsApp dalam tab baru
    window.open(whatsapp_url, "_blank");
  });
});
