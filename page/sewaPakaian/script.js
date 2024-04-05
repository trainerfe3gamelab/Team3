$(document).ready(function () {
  $("div.card").click(function () {
    console.log("klik");
    window.location.href = "form.html";
  });

  $("form").submit(function (event) {
    // Menghentikan aksi default pengiriman form
    event.preventDefault();

    // Menangkap nilai dari input form
    let barang = $(".card-title").text();
    let nama = $("#nama").val();
    let telp = $("#telp").val();
    let tgl_lahir = $("#tgl").val();
    let jabatan = $("#jabatan").val();
    let size = $("#size").val();
    let durasi = $("#durasi").val();
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
      "Ukuran: " +
      size +
      "\n" +
      "Durasi Sewa (Hari): " +
      durasi +
      "\n" +
      "Jumlah Pesanan: " +
      sum;

    // Membuat URL untuk WhatsApp
    var whatsapp_url =
      "https://api.whatsapp.com/send?phone=6285711064566&text=" +
      encodeURIComponent(message);

    // Buka halaman WhatsApp dalam tab baru
    window.open(whatsapp_url, "_blank");
  });
});
