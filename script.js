function criarTarefa() {
  const divOl = document.querySelector('#lista-tarefas');
  const lista = document.createElement('li');

  divOl.appendChild(lista);
  lista.innerText = document.querySelector('#texto-tarefa').value;

  document.querySelector('#texto-tarefa').value = '';
}

const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', criarTarefa);