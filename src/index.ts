// src/index.ts
import './index.css';

import { gsap, random } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

init();

function init() {
  hero();
  productIntro();
  about();
  productOne();
  productTwo();
  productThree();
  roadmap();
  featured();
  dop();
}

function hero() {
  const heading = new SplitType('.hero__heading');
  const firstLine = heading.lines[0].querySelectorAll('.char');
  const secondLine = heading.lines[1].querySelectorAll('.char');
  const therdLine = heading.lines[2].querySelectorAll('.char');
  const button = document.querySelector('.hero .button');
  const subTitle = document.querySelector('.hero__subtitle');

  const tl = gsap.timeline({
    defaults: { ease: 'expo', stagger: 0.1, autoAlpha: 0, yPercent: 100 },
  });

  tl.from(firstLine, {});
  tl.from(secondLine, {}, '-=80%');
  tl.from(therdLine, {}, '-=80%');
  tl.from(button, { duration: 2 }, '1');
  tl.from(subTitle, { duration: 1.5 }, '1');
}

function productIntro() {
  const heading = new SplitType('.features__title');
  const firstLine = heading.lines[0].querySelectorAll('.char');
  const secondLine = heading.lines[1].querySelectorAll('.char');
  const button = document.querySelector('.intro__container .button');
  const subTitle = document.querySelector('.features__subtitle');

  const tl = gsap.timeline({
    defaults: { ease: 'expo', stagger: 0.1, autoAlpha: 0, yPercent: 100 },
    scrollTrigger: { trigger: '.features__intro', start: 'top bottom' },
  });

  tl.from(firstLine, {});
  tl.from(secondLine, {}, '-=80%');
  tl.from(subTitle, { yPercent: 50, duration: 1.5 }, '1');
  tl.from(button, { duration: 2 }, '1.2');
}

function about() {
  const heading = new SplitType('.about__title');
  const firstLine = heading.lines[0].querySelectorAll('.char');

  const button = document.querySelector('.about .button');
  const subTitle = document.querySelector('.about__subtitle');
  const text = document.querySelector('.about__text');

  const tl = gsap.timeline({
    defaults: { ease: 'expo', stagger: 0.1, autoAlpha: 0, yPercent: 100 },
    scrollTrigger: { trigger: '.about', start: 'top bottom' },
  });

  tl.from(firstLine, {});
  tl.from(subTitle, { yPercent: 50, duration: 1.5 }, '1');
  tl.from(text, { yPercent: 50, duration: 1.5 }, '1.5');
  tl.from(button, { duration: 2 }, '1.2');
}

function featured() {
  const featured = document.querySelectorAll('.features__item');
  featured.forEach((item) => {
    item.addEventListener('mouseover', () => {
      const arrow = item.querySelector('.arrow__wrapper');
      arrow.classList.add('rotate');
    });
    item.addEventListener('mouseout', () => {
      const arrow = item.querySelector('.arrow__wrapper');
      arrow.classList.remove('rotate');
    });

    const num = item.querySelector('.features__icon');
    const heading = item.querySelector('.features__item-title');
    const headingSplit = new SplitType(heading);
    const headingLine = headingSplit.lines;
    const text = item.querySelector('.features__item-text');
    const arrow = item.querySelector('.arrow__wrapper');

    const tl = gsap.timeline({
      defaults: { yPercent: 100, autoAlpha: 0, ease: 'ease' },
      scrollTrigger: { trigger: item },
    });
    tl.from(num, {});
    tl.from(headingLine, { stagger: 0.1 }, '-=30%');
    tl.from(text, {}, '-=30%');
  });
}

function productOne() {
  const heading = new SplitType('.live__item.is-live-01 .live__item-title');
  const firstLine = heading.lines[0].querySelectorAll('.char');

  const button = document.querySelector('.live__item.is-live-01 .button');
  const subTitle = document.querySelector('.live__item.is-live-01 .live__item-text');
  const image = document.querySelector('.product__image-01');

  const tl = gsap.timeline({
    defaults: { ease: 'expo', stagger: 0.1, autoAlpha: 0, yPercent: 100 },
    scrollTrigger: { trigger: '.live__item.is-live-01', start: 'top bottom' },
  });

  tl.from(firstLine, {});
  tl.from(subTitle, { yPercent: 50, duration: 1.5 }, '1');
  tl.from(button, { duration: 2 }, '1.2');
  tl.from(image, {});
}

function productTwo() {
  const heading = new SplitType('.live__item.is-live-02 .live__item-title');
  const firstLine = heading.lines[0].querySelectorAll('.char');
  const secondLine = heading.lines[1].querySelectorAll('.char');
  const therdLine = heading.lines[2].querySelectorAll('.char');

  const button = document.querySelector('.live__item.is-live-02 .button');
  const subTitle = document.querySelector('.live__item.is-live-02 .live__item-text');

  const tl = gsap.timeline({
    defaults: { ease: 'expo', stagger: 0.1, autoAlpha: 0, yPercent: 100 },
    scrollTrigger: { trigger: '.live__item.is-live-02', start: 'top bottom' },
  });

  tl.from(firstLine, {});
  tl.from(secondLine, {}, '-=80%');
  tl.from(therdLine, {}, '-=80%');
  tl.from(subTitle, { yPercent: 50, duration: 1.5 }, '1');
  tl.from(button, { duration: 2 }, '1.2');
}

function productThree() {
  const heading = new SplitType('.live__item.is-live-03 .live__item-title');
  const firstLine = heading.lines[0].querySelectorAll('.char');

  const button = document.querySelector('.live__item.is-live-03 .button');
  const subTitle = document.querySelector('.live__item.is-live-03 .live__item-text');
  const card = document.querySelectorAll('[card="desktop"]');

  const tl = gsap.timeline({
    defaults: { ease: 'expo', stagger: 0.1, autoAlpha: 0, yPercent: 100 },
    scrollTrigger: { trigger: '.live__item.is-live-03', start: 'top bottom' },
  });

  tl.from(firstLine, {});
  tl.from(subTitle, { yPercent: 50, duration: 1.5 }, '1');
  tl.from(button, { duration: 2 }, '1.2');

  cardProducts();

  const tlCard = gsap.timeline({
    scrollTrigger: { trigger: '.live__item.is-live-02', start: 'top center' },
  });
  tlCard.from(card, { yPercent: 50, stagger: 0.1, autoAlpha: 0, duration: 1 });

  function cardProducts() {
    const item = document.querySelector('.live__item.is-live-02');
    const effect = document.querySelectorAll('[card="desktop"]');
    const rect = item.getBoundingClientRect();

    const randomMin = gsap.utils.random(-5, -30, 1, true);
    const randomPlus = gsap.utils.random(5, 30, 1, true);
    const { width } = rect;
    const { height } = rect;

    const arraySetters = [];

    effect.forEach((item, index) => {
      const setter = {
        x: gsap.quickSetter(item, 'x', 'px'),
        y: gsap.quickSetter(item, 'y', 'px'),
        minus: gsap.utils.mapRange(0, width, randomMin(), randomPlus()),
        plus: gsap.utils.mapRange(0, width, randomMin(), randomPlus()),
      };
      arraySetters.push(setter);
    });

    document.querySelector('body').addEventListener('mousemove', (e) => {
      arraySetters.forEach((item, index) => {
        const obj = arraySetters[index];
        obj.x(obj.minus(e.clientX - rect.left));
        obj.y(obj.plus(e.clientY - rect.top));
      });
    });
  }
}

function roadmap() {
  const heading = new SplitType('.roadmap_title');
  const firstLine = heading.lines[0].querySelectorAll('.char');

  const subTitle = document.querySelector('.live__item-text');
  const text = document.querySelector('.about__text');

  const tl = gsap.timeline({
    defaults: { ease: 'expo', stagger: 0.1, autoAlpha: 0, yPercent: 100 },
    scrollTrigger: { trigger: '.features__intro', start: 'top center' },
  });

  tl.from(firstLine, {});

  const roadmapItem = document.querySelectorAll('.roadmap__item');
  roadmapItem.forEach((item) => {
    gsap.from(item, {
      yPercent: 30,
      autoAlpha: 0,
      duration: 1.2,
      scrollTrigger: { trigger: item },
    });
  });
}

function dop() {
  const mobBurger = document.querySelector('.header__burger');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      // Условие прокрутки в пикселях
      mobBurger.classList.add('scrolled');
    } else {
      mobBurger.classList.remove('scrolled');
    }
  });

  modalAll();

  function modalAll() {
    const modalOPen = document.querySelectorAll('[modal="open"]');
    const modalClose = document.querySelector('[modal="close"]');
    const modal = document.querySelector('.pop-up');

    modalOPen.forEach((item) => {
      item.addEventListener('click', modalToggle);
    });

    modalClose.addEventListener('click', modalToggle);

    function modalToggle() {
      if (!modal.classList.contains('open')) {
        modal.classList.add('open');
      } else {
        modal.classList.remove('open');
      }
    }

    const burger = document.querySelector('[nav="open"]');
    const navClose = document.querySelector('[nav="close"]');
    const navMobile = document.querySelector('.nav-moblie');

    burger.addEventListener('click', navToggle);
    navClose.addEventListener('click', navToggle);

    const mobileLink = document.querySelectorAll('.nav-mobile__link');

    mobileLink.forEach((item) => {
      item.addEventListener('click', navToggle);
    });

    function navToggle() {
      if (!navMobile.classList.contains('open')) {
        navMobile.classList.add('open');
      } else {
        navMobile.classList.remove('open');
      }
    }
  }
}
