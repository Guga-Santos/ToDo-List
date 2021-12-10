const divOl = document.querySelector('#lista-tarefas');
function criarTarefa() {
  const lista = document.createElement('li');
  lista.classList.add('item');

  divOl.appendChild(lista);
  lista.innerText = document.querySelector('#texto-tarefa').value;

  document.querySelector('#texto-tarefa').value = '';
}

const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', criarTarefa);

function mudaBg(event) {
  const alvo = document.querySelector('.alvo');
  alvo.classList.remove('alvo');
  event.target.classList.add('alvo');
}

function lineThr(event) {
  event.target.classList.add('completed');
}

divOl.addEventListener('click', mudaBg);
divOl.addEventListener('dblclick', lineThr);

const apagaButton = document.querySelector('#apaga-tudo');

apagaButton.addEventListener('click', () => {
  divOl.innerHTML = '';
});

const finaliza = document.querySelector('#remover-finalizados');

finaliza.addEventListener('click', () => {
  const finalizados = document.getElementsByClassName('completed');
  while (finalizados.length > 0) {
    finalizados[0].parentNode.removeChild(finalizados[0]);
  }
});
