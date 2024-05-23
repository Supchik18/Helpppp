var count = 10;
const container = document.getElementById('help');
container.style.display = 'flex';
container.style.flexWrap = 'nowrap';
for (var i = 1; i < count; i++) {
  const img = document.createElement('img');
  img.src = '/image/forest.png';
  img.style.position='relative';
  img.style.right=2.5*i+'%';
  container.appendChild(img);
}