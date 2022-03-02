const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  
  window.addEventListener ('scroll', animOnScroll)

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHight = animItem.offsetHeight; 
      console.log( offSet(animItem))
      const animItemOffset = offSet(animItem);
      const animStart = 4;

      let animItemPoint = window.innerHeight - (animItemHight / animStart);

      if (animItemHight > window.innerHeight) {
        animItemPoint = window.innerHeight - (window.innerHeight / animStart);
      };

      if ((scrollY > animItemOffset - animItemPoint ) && (scrollY < (animItemOffset + animItemHight))) {
        animItem.classList.add ('_active');
      } else {
        animItem.classList.remove ('_active');
      }
    } 
  }

  function offSet(el) {
    const rect = el.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return (rect.top + scrollTop);
  }

  setTimeout (() => {
    animOnScroll()
  }, 300)
}