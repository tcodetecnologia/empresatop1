let dados = [];

fetch('dados.json')
  .then(res => res.json())
  .then(json => {
    dados = json;
    mostrarDados(json);
  });

function mostrarDados(lista) {
  const tbody = document.getElementById('resultados');
  tbody.innerHTML = '';

  lista.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${item.categoria}</td><td>${item.vencedor}</td>`;
    tbody.appendChild(tr);
  });
}

document.getElementById('search').addEventListener('input', function() {
  const termo = this.value.toLowerCase();
  const filtrado = dados.filter(item => item.categoria.toLowerCase().includes(termo));
  mostrarDados(filtrado);
});
