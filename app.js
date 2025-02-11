let amigos = [];
let nomesSorteados = [];

function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === '') {
    alert('Por favor, insira um nome!');
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert(`O nome "${nomeAmigo}" já foi inserido!`);
  } else {
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = '';
  }
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  amigos.forEach((amigo) => {
    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = amigo;
    listaAmigos.appendChild(novoAmigo);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Nenhum nome foi inserido!');
    return;
  }

  if (amigos.length < 2) {
    alert('Você precisa adicionar pelo menos 2 amigos!');
    return;
  }

  if (nomesSorteados.length >= amigos.length) {
    alert('Todos os nomes já foram sorteados!');
    return;
  }

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  let nomeSorteado;
  do {
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    nomeSorteado = amigos[indiceSorteado];
  } while (nomesSorteados.includes(nomeSorteado));

  nomesSorteados.push(nomeSorteado);
  resultado.textContent = `O amigo secreto é: ${nomeSorteado}`;
}

function novoSorteio() {
  nomesSorteados = [];
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  alert('Novo sorteio iniciado!');
}