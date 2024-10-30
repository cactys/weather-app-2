const inputWrapper = document.querySelector('.input-wrapper');
const searchInput = document.querySelector('.input');
const buttonSearch = document.querySelector('.input-button');
const buttonClose = document.querySelector('.close');

searchInput.addEventListener('keypress', (event) => {
  if (event.key == 'Enter' && searchInput.value) {
    console.log(searchInput.value);
    searchInput.value = '';
  }
});

function changeInputHoverState(){
  const isFocused = inputWrapper.classList.contains('input-wrapper_focused')
  // Проверка для отключения ховера на мобилках
  const isHoverableDevice = window.matchMedia('(hover:hover)').matches 
  if (!isHoverableDevice || isFocused) {
    inputWrapper.classList.remove('input-wrapper_hovered')
    return
  };
  if (event.type == 'mouseover'){
    inputWrapper.classList.add('input-wrapper_hovered')
    return;
  }
  inputWrapper.classList.remove('input-wrapper_hovered')
}



inputWrapper.addEventListener('mouseover', () => {
  changeInputHoverState()
});
inputWrapper.addEventListener('mouseout', () => {
  changeInputHoverState()
});

searchInput.addEventListener('focus', () => {
  inputWrapper.classList.add('input-wrapper_focused')
  buttonSearch.style.display = 'none';
  buttonClose.style.display = 'block';
});

searchInput.addEventListener('blur', () => {
  if (searchInput.value) {
    return;
  };
  inputWrapper.classList.remove('input-wrapper_focused')
  buttonSearch.style.display = 'block';
  buttonClose.style.display = 'none';
});

buttonClose.addEventListener('click', () => {
  inputWrapper.classList.remove('input-wrapper_focused');
  searchInput.value = '';
  buttonSearch.style.display = 'block';
  buttonClose.style.display = 'none';
});
