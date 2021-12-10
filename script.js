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
  const alvo = document.querySelector('.alvo');
  alvo.classList.remove('alvo');
  event.target.classList.add('alvo');
}

function lineThr(event) {
    const completed = document.querySelector('.completed');
    completed.classList.remove('completed');
    event.target.classList.add('completed');
  }

document.querySelector('#lista-tarefas').addEventListener('click', mudaBg);
document.querySelector('#lista-tarefas').addEventListener('dblclick', lineThr);

const apagaButton = document.querySelector('#apaga-tudo');

apagaButton.addEventListener('click', function() {
    document.querySelector('#lista-tarefas').innerHTML = ''
})

