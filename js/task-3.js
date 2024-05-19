document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#name-input');
    const output = document.querySelector('#name-output');
  
    input.addEventListener('input', () => {
      const name = input.value.trim();
      output.textContent = name === '' ? 'Anonymous' : name;
    });
  });
 