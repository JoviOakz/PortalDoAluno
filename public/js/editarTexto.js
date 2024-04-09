function tornarSomenteLeitura() {
  const inputs = document.querySelectorAll('.campoEditavel');
  const botaoEditar = document.getElementById('botaoEditarSalvar');
  const botaoSalvar = document.getElementById('botaoSalvar');
  const img = document.getElementById('flImage');
  const imgg = document.getElementById('imgFoto');

  if (botaoEditar.textContent === 'Editar') {
    inputs.forEach(input => {
      input.readOnly = false; // Torna o campo editável
      input.classList.remove('input-inacessivel'); // Remove a classe para tornar o campo clicável
    });
    botaoEditar.textContent = 'Cancelar';
    botaoSalvar.style.display = 'inline';
    img.removeAttribute('disabled');
    imgg.style.cursor = 'pointer';
     // Mostra o botão de salvar
  } else {
    inputs.forEach(input => {
      input.readOnly = true; // Torna o campo somente leitura
      input.classList.add('input-inacessivel'); // Adiciona a classe para tornar o campo não clicável
    });
    img.setAttribute('disabled', 'disabled');
    imgg.style.cursor = '';
    botaoEditar.textContent = 'Editar';
    botaoSalvar.style.display = 'none'; // Esconde o botão de salvar
    window.location.reload();
  }
}

function salvarEdicao() {
  // Lógica para salvar as edições
  alert('Edições salvas com sucesso!');

  const botaoSalvar = document.getElementById('botaoSalvar');
  botaoSalvar.style.display = 'none'; 
}