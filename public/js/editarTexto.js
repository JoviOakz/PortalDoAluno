document.getElementById('botao-editar').addEventListener('click', function () {
  var texto = document.getElementById('texto-editavel');
  // Verifica se o texto está editável ou não
  var estaEditavel = texto.getAttribute('contenteditable');

  if (estaEditavel === 'true') {
    // Torna o texto não editável
    texto.setAttribute('contenteditable', 'false');
    this.textContent = 'Editar Texto';
  } else {
    // Torna o texto editável
    texto.setAttribute('contenteditable', 'true');
    this.textContent = 'Salvar Texto';
  }
});