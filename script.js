const blockquoteEls = document.querySelectorAll("blockquote");

const IOSettings = {
  root: null,
  threshold: [0.2, 0.8]
}

blockquoteEls.forEach((el) => {
  const io = new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio < 0.4){
    el.classList.remove('active');
    return;
  } else if(entries[0].intersectionRatio >= 0.4 ) {
    el.classList.add('active');
    return;
  }
  }, IOSettings)
  io.observe(el)
})