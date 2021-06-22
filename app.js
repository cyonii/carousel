function getCarouselItems(el) {
  const items = Array.from(el.querySelectorAll('.carousel-inner .carousel-item'));
  const activeItem = items.find((i) => i.classList.contains('active'));
  const nextItem = activeItem.nextElementSibling;
  const prevItem = activeItem.previousElementSibling;

  return { items, activeItem, nextItem, prevItem };
}

const carouselControls = document.querySelectorAll('[data-slide-target]');
carouselControls.forEach((control) => {
  control.onclick = (e) => {
    e.preventDefault();

    const carouselID = e.currentTarget.getAttribute('data-slide-target');
    const carousel = document.querySelector(carouselID);
    const { items, activeItem, nextItem, prevItem } = getCarouselItems(carousel);
    const slideControl = e.currentTarget.getAttribute('data-slide-ctrl');

    if (items.length < 2) return;

    activeItem.classList.remove('active');
    switch (slideControl) {
      case 'next':
        if (nextItem) nextItem.classList.add('active');
        else items[0].classList.add('active');
        break;
      case 'prev':
        if (prevItem) prevItem.classList.add('active');
        else items[items.length - 1].classList.add('active');
        break;
    }
  };
});
