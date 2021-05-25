tippy('.confirmed', {
  content: `<div class="confirmed-msg">
							<div class="confirmed-msg__title">
								Подтверждённая компания
							</div>
							<div class="confirmed-msg__text">
								Реквизиты компании проверены банковским переводом.
							</div>
						</div>`,
  allowHTML: true,
});

// To connect the SimpleBar
function plugSimpleBar(selector) {
  let simpleBarEl = document.querySelector(selector);
  if (simpleBarEl) {
    try {
      new SimpleBar(simpleBarEl);

    } catch {
      simpleBarEl.style.ovetflowY = 'auto';
    }
  }
}

plugSimpleBar('.page__abs-table');
plugSimpleBar('.breadcrumbs'); 
plugSimpleBar('.page__photos-box');