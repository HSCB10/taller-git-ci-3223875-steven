console.log('App lista');
console.log('Commit dummy para poder avanzar con el flujo'); // cambio seguro para commit
console.log('Commit 3: listo para PR'); // nuevo console.log para generar el tercer commit

export function agregarItem(texto) {
  const lista = document.getElementById('lista');
  if (!lista) return null;

  if (typeof texto !== 'string' || texto.trim() === '') return null;

  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);

  return li;
}

const btn = document.getElementById('agregar');
if (btn) {
  btn.addEventListener('click', () => agregarItem('Nuevo item'));
}
