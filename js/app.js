/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

         __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
            /* harmony export */
         });
         // проверка поддержки webp, добавление класса webp или no-webp
         function isWebp() {
            //проверка поддержки webp
            function testWebP(callback) {

               var webP = new Image();
               webP.onload = webP.onerror = function () {
                  callback(webP.height == 2);
               };
               webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }

            //добавление класса
            testWebP(function (support) {
               if (support == true) {
                  document.querySelector('body').classList.add('webp');
               } else {
                  document.querySelector('body').classList.add('no-webp');
               }
            });
         }

         /***/
      })
/******/]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
         /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
         /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
   }
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
               /******/
            }
            /******/
         }
         /******/
      };
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
         }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
         /******/
      };
      /******/
   })();
   /******/
   /************************************************************************/
   var __webpack_exports__ = {};
   // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
   (() => {
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


      _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

      /*------------------------------Классы анимаций для кнопок---------------------------*/
      function initButtonAnimation() {
         const buttons = document.querySelectorAll('[class*="btn-anim"]');

         if (buttons.length > 0) {
            buttons.forEach(function (button) {
               button.addEventListener('mouseover', function () {
                  button.classList.remove('animated-out');
                  button.classList.add('animated-in');
               });

               button.addEventListener('mouseout', function () {
                  button.classList.remove('animated-in');
                  button.classList.add('animated-out');
               });
            });
         }
      }

      function checkScreenSize() {
         if (window.innerWidth > 1023) {
            initButtonAnimation();
         }
      }

      window.addEventListener('load', checkScreenSize);
      window.addEventListener('resize', function () {
         if (window.innerWidth > 1023) {
            checkScreenSize();
         }
      });


      /*------------------------------Video---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const videos = document.querySelectorAll('video');

         videos.forEach(video => {
            if (!video.classList.contains('article-video')) {
               video.muted = true;
               video.play().catch(error => {
                  console.error('Ошибка автозапуска видео:', error);
               });
            }
         });
      });

      /*------------------------------открытие меню---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const menuOpenButton = document.querySelector('.menu__open-button');
         const menuCloseButton = document.querySelector('.menu__close');
         const menuBody = document.querySelector('.menu__body');
         const body = document.body;

         if (menuOpenButton && menuCloseButton && menuBody) {
            menuOpenButton.addEventListener('click', function () {
               menuBody.classList.add('opened');
               body.classList.add('no-scroll');
            });

            menuCloseButton.addEventListener('click', function () {
               menuBody.classList.remove('opened');
               body.classList.remove('no-scroll');
            });
         }
      });

      /*------------------------------открытие коллбека в меню---------------------------*/
      const openCallbackBtn = document.querySelector('.open-callback');
      const closeCallbackBtn = document.querySelector('.menu__callback-close');
      const callbackMenu = document.querySelector('.menu__callback');
      const callbackMenuBody = document.querySelector('.menu__callback-body');
      const menuBody = document.querySelector('.menu__body');

      if (openCallbackBtn && callbackMenu && menuBody) {
         openCallbackBtn.addEventListener('click', function () {
            callbackMenu.classList.add('opened');
            menuBody.classList.add('no-scroll');
         });
      }

      if (closeCallbackBtn && callbackMenu && menuBody) {
         closeCallbackBtn.addEventListener('click', function () {
            callbackMenu.classList.remove('opened');
            menuBody.classList.remove('no-scroll');
         });
      }

      document.addEventListener('click', function (event) {
         if (callbackMenu.classList.contains('opened') && !callbackMenuBody.contains(event.target) && !openCallbackBtn.contains(event.target)) {
            callbackMenu.classList.remove('opened');
            menuBody.classList.remove('no-scroll');
         }
      });


      /*------------------------------Инпуты в форме---------------------------*/
      const inputs = document.querySelectorAll('.form__item input');

      if (inputs.length > 0) {
         inputs.forEach(input => {
            input.addEventListener('focus', function () {
               this.closest('.form__item').classList.add('active');
            });

            input.addEventListener('blur', function () {
               if (this.value.trim() === '') {
                  this.closest('.form__item').classList.remove('active');
               }
            });

            if (input.value.trim() !== '') {
               input.closest('.form__item').classList.add('active');
            }
         });
      }

      /*------------------------------Маска номера---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const elements = document.querySelectorAll('.tel-mask');

         if (elements.length > 0) {
            const maskOptions = {
               mask: '+{7}(000)000-00-00'
            };

            elements.forEach(function (element) {
               IMask(element, maskOptions);
            });
         }
      });

      /*------------------------------Бегущая строка---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const swiper = new Swiper('.marquee__slider', {
            slidesPerView: 'auto',
            speed: 5000,
            loop: true,
            allowTouchMove: false,
            autoplay: {
               delay: 0,
               disableOnInteraction: false
            },
            effect: 'slide'
         });
      });


      /*-------------------------КЕЙСЫ--------------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const swiper = new Swiper('.cases__slider', {

            loop: true,
            speed: 400,
            effect: 'slide',
            spaceBetween: 20,
            slideToClickedSlide: true,
            navigation: {
               nextEl: '.cases__slide-next',
               prevEl: '.cases__slide-prev',
            },
            breakpoints: {
               320: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
               },
               520: {
                  slidesPerView: 2,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
               },
               1000: {
                  slidesPerView: 3.5,
                  spaceBetween: 20,
               },
            }
         });
      });

      const gsBgImgSelector = ".slider-gallery img";
      const sliderImgs = document.querySelectorAll(gsBgImgSelector);

      if (sliderImgs.length > 0) {
         const dynamicEl = [...sliderImgs].map((sliderImg) => {
            return {
               src: sliderImg.src,
               thumb: sliderImg.src,
               subHtml: ''
            };
         });

         const dynamicGalleryButtons = document.querySelectorAll(".dynamic-gallery-button");

         dynamicGalleryButtons.forEach((button, idx) => {
            const popup = lightGallery(button, {
               dynamic: true,
               download: false,
               dynamicEl,
               mobileSettings: {
                  showCloseIcon: true,
               },
            });

            button.addEventListener("click", () => {
               popup.openGallery(idx);
            });
         });

         [...document.querySelectorAll(".slider-gallery")].forEach((slide, idx) => {

            const button = slide.querySelector('.dynamic-gallery-button');
            if (button) {
               button.addEventListener("click", () => {
                  const popup = lightGallery(button, {
                     dynamic: true,
                     download: false,
                     dynamicEl,
                     mobileSettings: {
                        showCloseIcon: true,
                     },
                  });
                  popup.openGallery(idx);
               });
            }
         });
      }

      /*-------------------------КЕЙСЫ--------------------------------*/
      document.addEventListener('mousemove', function (e) {
         const circle = document.querySelector('.blur-circle');

         const circleWidth = circle.offsetWidth;
         const circleHeight = circle.offsetHeight;

         setTimeout(() => {
            circle.style.transform = `translate(${e.clientX - circleWidth / 2}px, ${e.clientY - circleHeight / 2}px)`;
         }, 30);
      });


      /*------------------------------Ценности---------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         const items = document.querySelectorAll(".advantages__item");
         const observerOptions = {
            root: null,
            threshold: 1,
            rootMargin: "-100px 0px -100px 0px"
         };

         let lastIntersectingItem = null;
         const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  if (lastIntersectingItem !== entry.target) {
                     items.forEach(item => item.classList.remove("active"));
                     entry.target.classList.add("active");
                     lastIntersectingItem = entry.target;
                  }
               } else {
                  if (entry.target.classList.contains("active")) {
                     entry.target.classList.remove("active");
                     let nextItem = findClosestVisible(items);
                     if (nextItem) {
                        nextItem.classList.add("active");
                        lastIntersectingItem = nextItem;
                     }
                  }
               }
            });
         }, observerOptions);

         items.forEach(item => {
            observer.observe(item);
         });

         function findClosestVisible(items) {
            let closestItem = null;
            let closestDistance = Infinity;
            items.forEach(item => {
               const rect = item.getBoundingClientRect();
               const itemCenter = rect.top + rect.height / 2;
               const screenCenter = window.innerHeight / 2;
               const distance = Math.abs(itemCenter - screenCenter);
               if (distance < closestDistance) {
                  closestDistance = distance;
                  closestItem = item;
               }
            });
            return closestItem;
         }
      });


      /*------------------------------Карточки услуг---------------------------*/
      document.addEventListener("DOMContentLoaded", () => {
         if (window.innerWidth > 1000) {
            const cardContainers = document.querySelectorAll('.services__cards');

            cardContainers.forEach(container => {
               const cards = container.querySelectorAll('.services__card');
               let activeCard = null;

               cards.forEach((card, index) => {
                  card.addEventListener('mouseenter', () => {
                     if (activeCard !== null) {
                        activeCard.parentElement.classList.remove(`hover-card-${activeCard.dataset.index}`);
                     }

                     card.parentElement.classList.add(`hover-card-${index + 1}`);
                     activeCard = card;
                     card.dataset.index = index + 1;
                  });
               });

               container.addEventListener('mouseleave', () => {
                  if (activeCard !== null) {
                     activeCard.parentElement.classList.remove(`hover-card-${activeCard.dataset.index}`);
                     activeCard = null;
                  }
               });
            });
         }
      });



      /*------------------------------Скрыть услуги на моб---------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         let showMoreBtn = document.querySelector('.services__show-more');
         let cards = document.querySelectorAll('.services__card');

         if (!showMoreBtn || cards.length === 0) {
            return;
         }

         let cardsToShow = 3;
         let currentCount = 3;

         function showNextCards() {
            for (let i = currentCount; i < currentCount + cardsToShow && i < cards.length; i++) {
               cards[i].style.display = 'block';
            }
            currentCount += cardsToShow;

            if (currentCount >= cards.length) {
               showMoreBtn.style.display = 'none';
            }
         }

         if (window.innerWidth <= 600) {
            for (let i = cardsToShow; i < cards.length; i++) {
               cards[i].style.display = 'none';
            }
         }

         showMoreBtn.addEventListener('click', function () {
            showNextCards();
         });
      });


      /*------------------------------Услуги Opacity на моб---------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         const cards = document.querySelectorAll('.services__card');
         let currentVisibleCard = null;

         function handleVisibility(entries) {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  if (currentVisibleCard && currentVisibleCard !== entry.target) {
                     currentVisibleCard.classList.remove('visibled');
                  }
                  entry.target.classList.add('visibled');
                  currentVisibleCard = entry.target;
               }
            });
         }
         let options = {
            threshold: 1
         };
         const observer = new IntersectionObserver(handleVisibility, options);
         cards.forEach(card => {
            observer.observe(card);
         });
      });


      /*------------------------------Отзывы---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const buttons = document.querySelectorAll('.testimonial__button button');
         buttons.forEach((button, idx) => {
            button.addEventListener('click', function () {
               const galleryImages = [];
               const img = button.closest('.testimonial').querySelector('img');
               if (img) {
                  galleryImages.push({ src: img.src, thumb: img.src });
               }
               const popup = lightGallery(button, {
                  dynamic: true,
                  dynamicEl: galleryImages,
                  download: false,
                  mobileSettings: {
                     showCloseIcon: true,
                  },
               });
               popup.openGallery(0);
            });
         });
      });

      /*------------------------------Scroll to top---------------------------*/
      const scrollToTopBtn = document.querySelector('.scroll-top');

      scrollToTopBtn.addEventListener('click', function () {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      });

      window.addEventListener('scroll', function () {
         if (window.scrollY > 100) {
            scrollToTopBtn.style.display = 'block';
         } else {
            scrollToTopBtn.style.display = 'none';
         }
      });


      /*------------------------------Форма---------------------------*/
      /*
      document.addEventListener('DOMContentLoaded', function () {
         const forms = document.querySelectorAll('.form');

         forms.forEach((form) => {
            form.addEventListener('submit', function (e) {
               e.preventDefault();

               form.classList.add('loading');

               setTimeout(() => {
                  form.classList.remove('loading');
                  form.classList.add('sended');
                  setTimeout(() => {
                     form.submit();
                  }, 3000);
               }, 3000);
            });
         });
      });
*/

      /*-------------------------Области применения--------------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const swiperAppl = new Swiper('.applications__slider', {

            loop: true,
            speed: 400,
            effect: 'slide',
            spaceBetween: 20,
            slideToClickedSlide: true,
            navigation: {
               nextEl: '.applications__slide-next',
               prevEl: '.applications__slide-prev',
            },
            breakpoints: {
               320: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
               },
               520: {
                  slidesPerView: 2,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
               },
               1000: {
                  slidesPerView: 2.7,
                  spaceBetween: 20,
               },
            }
         });
      });

      /*------------------------------faq---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const tabItems = document.querySelectorAll('.description__item');

         if (tabItems.length > 0) {
            tabItems[0].classList.add('active');

            tabItems.forEach(item => {
               const question = item.querySelector('.description__question');
               question.addEventListener('click', function () {
                  const isActive = item.classList.contains('active');

                  tabItems.forEach(i => i.classList.remove('active'));

                  if (!isActive) {
                     item.classList.add('active');
                  }
               });
            });
         }
      });


   })();

   /******/
})()
   ;

/*------------------------------CASES TABS---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const tags = document.querySelectorAll('.cases__tag');
   const slides = document.querySelectorAll('.cases__slide-wrapper'); // Изменено на .cases__slide-wrapper

   tags.forEach(tag => {
      tag.addEventListener('click', function (e) {
         e.preventDefault();

         // Удаляем класс active у всех вкладок и добавляем кликнутой
         tags.forEach(tag => tag.classList.remove('active'));
         this.classList.add('active');

         // Скрываем все слайды и показываем только для выбранной категории
         const category = this.getAttribute('data-category');
         slides.forEach(slide => {
            if (slide.getAttribute('data-category') === category) {
               slide.style.display = 'block';
            } else {
               slide.style.display = 'none';
            }
         });
      });
   });
});


/*------------------------------AJAX---------------------------*/
jQuery(document).ready(function ($) {
   // Обработчик для ссылок с классом .mainentance__tag
   $('.mainentance__tag').on('click', function (event) {
      event.preventDefault(); // Отключаем стандартное поведение ссылки

      var url = $(this).attr('href'); // Получаем URL из ссылки
      if (url && url !== window.location.href) {
         // Обновляем URL с помощью History API
         window.history.pushState({ path: url }, '', url);

         // AJAX-запрос для подгрузки новой страницы
         $.ajax({
            url: url,
            type: 'GET',
            success: function (response) {
               // Находим контент внутри подгружаемой страницы и вставляем его в контейнер
               var newContent = $(response).find('#ajax-content').html();
               $('#ajax-content').html(newContent);
            },
            error: function () {
               alert('Не удалось загрузить контент. Попробуйте снова.');
            }
         });
      }
   });

   // Обработка события popstate для работы кнопок "Назад" и "Вперед"
   $(window).on('popstate', function () {
      var url = location.pathname;
      $.ajax({
         url: url,
         type: 'GET',
         success: function (response) {
            var newContent = $(response).find('#ajax-content').html();
            $('#ajax-content').html(newContent);
         },
         error: function () {
            alert('Не удалось загрузить контент. Попробуйте снова.');
         }
      });
   });
});
