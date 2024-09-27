const swiper3 = new Swiper('.newsSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button3-next",
    prevEl: ".swiper-button3-prev",
  },
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    770: {
      slidesPerView: 2,
    },
    995: {
      slidesPerView: 3,
    }
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
})

const swiper2 = new Swiper(".aboutSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button2-next",
    prevEl: ".swiper-button2-prev",
  },
  autoplay: {
    delay: 1500,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});


const swiper = new Swiper('.companiesSwiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
      },
      579: {
        slidesPerView: 2,
      },
      970: {
        slidesPerView: 3,
      }
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
}
)