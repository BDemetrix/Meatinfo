(()=>{
  let employees = document.querySelectorAll('.button--employee');
  if (employees.length) {
    employees.forEach(employee => {
      employee.addEventListener('click', () => {
        const text = employee.textContent;
        employee.textContent = employee.dataset.text;
        employee.dataset.text = text;
        employee.dataset.sent = employee.dataset.sent ? employee.dataset.sent = 'false' : employee.dataset.sent = 'true'
      });
    });
  };

  let upBtn = document.querySelector('.button--up');
  if (upBtn) {
    upBtn.addEventListener('click', ()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"});
    });
  }
})();