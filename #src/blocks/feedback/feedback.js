(()=>{
  let prevCloseBtns = document.querySelectorAll('.feedback__preview-btn');
  prevCloseBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
      btn.parentNode.remove();
    });
  })
})();