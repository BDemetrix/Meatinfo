(()=>{
  let employees = document.querySelectorAll('.button--employee');
  employees.forEach(employee => {
    employee.addEventListener('click', ()=>{
      const text = employee.textContent;
      employee.textContent = employee.dataset.text;
      employee.dataset.text = text;
      employee.dataset.sent = employee.dataset.sent ? employee.dataset.sent = 'false' : employee.dataset.sent = 'true'
    });
  });
})();