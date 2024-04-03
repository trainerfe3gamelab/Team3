const timKami = [
  {
    name: "Suratno",
    description:
      "CEO di usaha fashion sewa dan jahit baju, adalah pemimpin berbakat dengan dedikasi tinggi terhadap kualitas dan tren fashion. Dikenal karena kepemimpinan kuat, keahlian desain, dan kemampuan berkomunikasi yang baik, Suratno berhasil membawa usahanya menuju kesuksesan dan reputasi yang baik.",
    img: "../../assets/img/tim/Suratno.png",
  },
  {
    name: "Amellya",
    description:
      "Accounting Manager di usaha fashion sewa dan jahit baju. Dengan pengalaman dan keahlian dalam mengelola keuangan, Amellya memainkan peran kunci dalam menjaga keseimbangan keuangan dan kepatuhan perusahaan.",
    img: "../../assets/img/tim/Amel.png",
  },
  {
    name: "Shendy",
    description:
      "Fotografer dan desainer di usaha fashion sewa dan jahit baju,  Dengan keahlian dalam fotografi dan desain, Shendy memberikan sentuhan artistik yang unik dan inspiratif bagi merek dan produk dalam industri fashion.",
    img: "../../assets/img/tim/Shendy.png",
  },
];

$(document).ready(function () {
  function toggleActiveNav() {
    var scrollPosition = $(document).scrollTop();
    $(".navbar-nav")
      .find("a")
      .each(function () {
        var sectionId = $(this).attr("href");
        if ($(sectionId).length) {
          var sectionTop = $(sectionId).offset().top - 120;
          var sectionBottom = sectionTop + $(sectionId).outerHeight();
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            $("nav .navbar-nav").find("a").removeClass("active");
            $(this).closest("a").addClass("active");
          }
        }
      });
  }

  // Panggil fungsi toggleActiveNav saat dokumen di-load
  toggleActiveNav();

  // Panggil fungsi toggleActiveNav saat halaman di-scroll
  $(document).on("scroll", function () {
    toggleActiveNav();
  });

  // Ketika tombol btn-ceo diklik
  $("#btn-ceo").click(function () {
    $(".info-tim").find("h3").text(timKami[0].name);
    $(".info-tim").find("p").text(timKami[0].description);
    $(".profile-tim").find("img").attr("src", timKami[0].img);

    // Tambahkan kelas pada tag <p> dan tag <span>
    $(this).find("p").addClass("active");
    $(this).find("span").addClass("active");

    // Hapus kelas dari tombol lainnya
    $("#btn-manager, #btn-designer").each(function () {
      $(this).find("p").removeClass("active");
      $(this).find("span").removeClass("active");
    });
  });

  // Ketika tombol btn-manager diklik
  $("#btn-manager").click(function () {
    $(".info-tim").find("h3").text(timKami[1].name);
    $(".info-tim").find("p").text(timKami[1].description);
    $(".profile-tim").find("img").attr("src", timKami[1].img);
    // Tambahkan kelas pada tag <p> dan tag <span>
    $(this).find("p").addClass("active");
    $(this).find("span").addClass("active");

    // Hapus kelas dari tombol lainnya
    $("#btn-ceo, #btn-designer").each(function () {
      $(this).find("p").removeClass("active");
      $(this).find("span").removeClass("active");
    });
  });

  // Ketika tombol btn-designer diklik
  $("#btn-designer").click(function () {
    $(".info-tim").find("h3").text(timKami[2].name);
    $(".info-tim").find("p").text(timKami[2].description);
    $(".profile-tim").find("img").attr("src", timKami[2].img);
    // Tambahkan kelas pada tag <p> dan tag <span>
    $(this).find("p").addClass("active");
    $(this).find("span").addClass("active");

    // Hapus kelas dari tombol lainnya
    $("#btn-ceo, #btn-manager").each(function () {
      $(this).find("p").removeClass("active");
      $(this).find("span").removeClass("active");
    });
  });
});
