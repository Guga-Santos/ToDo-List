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
  document.querySelector('ol').classList.add('alvo');
});

const finaliza = document.querySelector('#remover-finalizados');

finaliza.addEventListener('click', () => {
  const finalizados = document.getElementsByClassName('completed');
  while (finalizados.length > 0) {
    finalizados[0].parentNode.removeChild(finalizados[0]);
  }
  document.querySelector('ol').classList.add('alvo');
});

// Retirei a ideia do bloco acima deste link:
// https://qastack.com.br/programming/4777077/removing-elements-by-class-name

// const salvaButton = document.querySelector('#salvar-tarefas');

const praCima = document.querySelector('#mover-cima');
const praBaixo = document.querySelector('#mover-baixo');

function goUP() {
  const selection = document.querySelector('.alvo');
  const localTroca = document.querySelector('.alvo').previousElementSibling;
  const reserva = selection.innerHTML;
  selection.innerHTML = localTroca.innerHTML;
  localTroca.innerHTML = reserva;
  selection.classList.remove('alvo');
  localTroca.classList.add('alvo');
}

function goDown() {
  const selection = document.querySelector('.alvo');
  const localTroca = document.querySelector('.alvo').nextElementSibling;
  const reserva = selection.innerHTML;
  selection.innerHTML = localTroca.innerHTML;
  localTroca.innerHTML = reserva;
  selection.classList.remove('alvo');
  localTroca.classList.add('alvo');
}

praCima.addEventListener('click', goUP);
praBaixo.addEventListener('click', goDown);
