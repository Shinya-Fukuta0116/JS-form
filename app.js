function animatedForm() {
  const arrows = document.querySelectorAll('.fa-arrow-down');

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // check for validation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === 'email' && validateEmail(input)) {
        nextSlide(parent, nextForm);
      }
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    console.log('not enough charactors');
    error('rgb(189,87,87');
  } else {
    error('rgba(81, 193, 126, 0.796');
    return true;
  }
}

function validateEmail(email) {
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (validation.test(email.value)) {
    error('rgb(189,87,87');
    return true;
  } else {
    error('rgba(81, 193, 126, 0.796');
  }
}

function nextSlide(parent, nextForm) {
  parent.classlist.add('inactive');
  parent.classlist.remove('active');
  nextForm.classlist.add('active');

}

function error(color) {
  document.body.style.backgroundColor = color;
}


animatedForm();