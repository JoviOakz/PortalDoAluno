// document.getElementById('botao-editar').addEventListener('click', function () {
//   var texto = document.getElementById('texto-editavel');
//   // Verifica se o texto está editável ou não
//   var estaEditavel = texto.getAttribute('contenteditable');

//   if (estaEditavel === 'true') {
//     // Torna o texto não editável
//     texto.setAttribute('contenteditable', 'false');
//     this.textContent = 'Editar Texto';
//   } else {
//     // Torna o texto editável
//     texto.setAttribute('contenteditable', 'true');
//     this.textContent = 'Salvar Texto';
//   }
// });

function tornarSomenteLeitura() {
  const inputs = document.querySelectorAll('.campoEditavel');
  const botao = document.getElementById('botaoEditarSalvar'); // Adicionei esta 

  if (botao.textContent === 'Editar') {
    inputs.forEach(input => {
      input.readOnly = false; // Torna o campo editável
      input.classList.remove('input-inacessivel'); // Remove a classe para tornar o campo clicável
    });
    botao.textContent = 'Salvar';
  } else {
    inputs.forEach(input => {
      input.readOnly = true; // Torna o campo somente leitura
      input.classList.add('input-inacessivel'); // Adiciona a classe para tornar o campo não clicável
    });
    botao.textContent = 'Editar';
  }
}