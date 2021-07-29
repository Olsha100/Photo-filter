(function () {
  'use strict';
  let filter = document.querySelector('.filter');

  let line = document.querySelector('.line');
  /*
let mouseX;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  line.style.left = mouseX + 'px';
  filter.style.width = `calc(${mouseX}px)`;
});
*/

  let isDragged;
  let posX;
  let boundingClientRect;
  let grabPointX;

  function dragStart(e) {
    e.preventDefault();
    isDragged = this;

    boundingClientRect = isDragged.getBoundingClientRect();

    grabPointX = boundingClientRect.left - e.clientX;
  }

  function onDrag(e) {
    if (!isDragged) {
      return;
    }

    posX = e.clientX + grabPointX;
    console.log(`posX ${posX}`);
    console.log(`e.clientX ${e.clientX}`);
    if (posX < 0) {
      posX = 0;
    }

    isDragged.style.transform = `translate(${posX - 1000}px)`;
    filter.style.width = `calc(${posX}px)`;
  }

  function dragStop() {
    isDragged = null;
    posX = null;
    boundingClientRect = null;
    grabPointX = null;
  }

  line.addEventListener('mousedown', dragStart, false);
  document.addEventListener('mousemove', onDrag, false);
  document.addEventListener('mouseup', dragStop, false);
})();
