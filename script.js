function criarTarefa() {
  const divOl = document.querySelector('#lista-tarefas');
  const lista = document.createElement('li');
  lista.classList.add('item');

  divOl.appendChild(lista);
  lista.innerText = document.querySelector('#texto-tarefa').value;

  document.querySelector('#texto-tarefa').value = '';
}

const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', criarTarefa);

function mudaBg(event) {
  event.target.classList.add('alvo');
  const alvo = document.querySelector('.alvo');
  alvo.classList.remove('alvo');
  event.target.classList.add('alvo');
}

document.querySelector('#lista-tarefas').addEventListener('click', mudaBg);
