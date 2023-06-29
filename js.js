window.onload = function() {
    const text = document.querySelector('.typing-text');
    const message = 'Happy Birthday Salsa';

    function typeAndDelete() {
      text.textContent = ''; // Menghapus teks yang ada
      let index = 0;

      function type() {
        if (index < message.length) {
          text.textContent += message.charAt(index);
          index++;
          setTimeout(type, 150);
        } else {
          setTimeout(deleteText, 1000); // Setelah mengetik selesai, tunggu 1 detik sebelum menghapus teks
        }
      }

      function deleteText() {
        if (index >= 0) {
          text.textContent = message.substring(0, index);
          index--;
          setTimeout(deleteText, 75);
        } else {
          setTimeout(type, 1000); // Setelah menghapus teks selesai, tunggu 1 detik sebelum mulai mengetik lagi
        }
      }

      type(); // Mulai proses pengetikan
    }

    typeAndDelete(); // Memanggil fungsi untuk pertama kali
  };

  const sections = document.querySelectorAll('section');
  const navbarLinks = document.querySelectorAll('.nav-link');

  navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        sections.forEach(section => {
          if (section === target) {
            section.style.display = 'block';
          } else {
            section.style.display = 'none';
          }
        });
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var section1 = document.getElementById("section1");
    var audio = document.getElementById("background-music");
    var isMusicPlaying = false;
  
    var options = {
      rootMargin: "0px",
      threshold: 0
    };
  
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          if (!isMusicPlaying) {
            audio.currentTime = 0; // Mengatur ulang waktu pemutaran ke awal
            audio.play();
            isMusicPlaying = true;
          }
        } else {
          if (isMusicPlaying) {
            audio.pause();
            isMusicPlaying = false;
          }
        }
      });
    }, options);
  
    observer.observe(section1);
  
    // Event 'ended' untuk mengulang musik saat selesai
    audio.addEventListener("ended", function() {
      if (isMusicPlaying) {
        audio.currentTime = 0; // Mengatur ulang waktu pemutaran ke awal
        audio.play();
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const transparentButtons = document.querySelectorAll(".transparent-button");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-button");
  
    transparentButtons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        modals[index].style.display = "block";
      });
    });
  
    closeButtons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        modals[index].style.display = "none";
      });
    });
  });

  const book = document.querySelector('.book');

book.addEventListener('click', () => {
  book.classList.toggle('show-content');
});

document.addEventListener("DOMContentLoaded", function() {
  var animatedImage = document.querySelector(".animated-image");
  if (animatedImage) {
    var observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0 // Ubah nilai threshold sesuai kebutuhan
    };

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animatedImage.classList.add("hide-gif");
        }
      });
    }, observerOptions);

    var books = document.querySelectorAll(".book");
    books.forEach(function(book) {
      observer.observe(book);
    });

    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      observer.observe(section);
    });

    var gallerys = document.querySelectorAll(".gallery");
    gallerys.forEach(function(gallery) {
      observer.observe(gallery);
    });
  }
});

function validateAndSendToWhatsApp() {
  // Mendapatkan jawaban dari textarea
  var answer1 = document.getElementById("answer1").value;
  var answer2 = document.getElementById("answer2").value;
  var answer3 = document.getElementById("answer3").value;
  
  // Memeriksa apakah semua jawaban telah diisi
  if (answer1.trim() === '' || answer2.trim() === '' || answer3.trim() === '') {
    alert("Harap isi semua pertanyaan sebelum mengirim jawaban.");
    return;
  }
  
  // Menyusun pesan dengan jawaban yang akan dikirim ke WhatsApp
  var message = "Jawaban dari pertanyaan ulang tahun:\n\n";
  message += "1. Andai kita punya hubungan yang spesial, hubungan itu mau yang kaya apa sa?\n";
  message += answer1 + "\n\n";
  message += "2. Kalo kita punya hubungan tempat mana yang bakal di kunjungin pertama kali?\n";
  message += answer2 + "\n\n";
  message += "3. Kasih nilai dong buat website ini?\n";
  message += answer3;
  
  // Membentuk URL dengan skema WhatsApp
  var encodedMessage = encodeURIComponent(message);
  var whatsappURL = "https://wa.me/+62-882-8626-7925?text=" + encodedMessage; // Ganti xxxxxxxxxx dengan nomor WhatsApp tujuan
  
  // Membuka tautan di jendela atau tab baru
  window.open(whatsappURL, "_blank");
  
  // Mengosongkan textarea setelah mengirim jawaban
  document.getElementById("answer1").value = "";
  document.getElementById("answer2").value = "";
  document.getElementById("answer3").value = "";
}
function validateNumberInput(element) {
  element.value = element.value.replace(/\D/g, '');
}