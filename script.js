document.addEventListener('mousemove', function (e) {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const hexagons = document.querySelectorAll('.hexagon');
hexagons.forEach(hexagon => {
  hexagon.addEventListener('mouseover', function () {
    const cursor = document.querySelector('.cursor');
    cursor.style.background = 'radial-gradient(circle, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 0) 70%)';
  });

  hexagon.addEventListener('mouseout', function () {
    const cursor = document.querySelector('.cursor');
    cursor.style.background = 'radial-gradient(circle, rgba(255, 0, 153,1) 0%, rgba(255, 0, 153, 0) 70%)';
  });
});
