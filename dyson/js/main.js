// Бургер меню

(function () {
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__item')
    console.log(burgerIcon);

    if (!burgerIcon && !burgerNavLink) return

    document.body.classList.toggle('body--opened-menu')
  }
})()


// Выпадашка 

const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownList = document.querySelector('.dropdownList');

dropdownBtn.addEventListener('click', () => {
  dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
});

dropdownList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    dropdownBtn.textContent = e.target.textContent + ' ▼';
    dropdownList.style.display = 'none';
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.offers__top-dropdown')) {
    dropdownList.style.display = 'none';
  }
});


// Прибавление/ уменьшение товара

document.querySelectorAll('.offers__hero-calc').forEach(calc => {
  const minusBtn = calc.querySelector('.calc__minus');
  const deactiveBtn = calc.querySelector('.calc__deactive');
  const plusBtn = calc.querySelector('.calc__plus');
  const numberField = calc.querySelector('.calc__number');

  function updateMinusClass() {
    const value = parseInt(numberField.textContent);
    if (value === 1) {
      minusBtn.style.display = 'none';
      deactiveBtn.style.display = 'inline-block';
      deactiveBtn.style.pointerEvents = 'none';
    } else {
      minusBtn.style.display = 'inline-block';
      deactiveBtn.style.display = 'none';
    }
  }
  updateMinusClass();

  minusBtn.addEventListener('click', () => {
    let value = parseInt(numberField.textContent);
    if (value > 1) {
      numberField.textContent = value - 1;
      updateMinusClass();
    }
  });
  plusBtn.addEventListener('click', () => {
    let value = parseInt(numberField.textContent);
    numberField.textContent = value + 1;
    updateMinusClass();
  });
});

// Показать еще в отзывах

document.querySelector('.reviews__more').addEventListener('click', function (e) {
  e.preventDefault();


  const extraContent = document.getElementById('reviews__hidden');
  const isHidden = extraContent.style.display === 'none' || extraContent.style.display === '';


  if (isHidden) {
    extraContent.style.display = 'block';
    this.querySelector('.reviews__bottom-more').textContent = 'Скрыть';

  } else {
    extraContent.style.display = 'none';
    this.querySelector('.reviews__bottom-more').textContent = 'Показать еще';
  }
});

// Аккордеон 

let accordion = document.querySelectorAll('.accordion__item');

accordion.forEach((item) => {
  let itemBody = item.querySelector('.accordion__body');
  let itemHeight = itemBody.clientHeight;
  itemBody.style.height = '0px';

  let head = item.querySelector('.accordion__head');
  let plusSvg = item.querySelector('.accordion__item-plus svg');

  head.onclick = function () {
    let accBody = this.closest('.accordion__item').querySelector('.accordion__body');

    accBody.classList.toggle('accordion__body--opened');

    if (accBody.classList.contains('accordion__body--opened')) {
      itemBody.style.height = itemHeight + 'px';
      if (plusSvg) plusSvg.classList.add('rotated');
    } else {
      itemBody.style.height = '0px';
      if (plusSvg) plusSvg.classList.remove('rotated');
    }
  }
});


// Показать еще в новостях

document.querySelector('.news__bottom-link').addEventListener('click', function (e) {
  e.preventDefault();

  const extraContent = document.getElementById('news__hidden');
  const btnContainer = document.querySelector('.news__bottom-btn');
  const isHidden = extraContent.style.display === 'none' || extraContent.style.display === '';

  if (isHidden) {
    extraContent.style.display = 'flex';
    btnContainer.style.marginBottom = '70px';
    extraContent.classList.add('animate-show');
    this.querySelector('.news__bottom-link').textContent = 'Скрыть';
  } else {
    extraContent.style.display = 'none';
    btnContainer.style.marginTop = '150px';
    this.querySelector('.news__bottom-link').textContent = 'Показать еще';
  }
});

// 