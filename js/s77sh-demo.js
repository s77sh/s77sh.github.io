/**
 * @author Saeed Shahryar - @s77sh
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#111148',
    lineColor: '#db1f5c',
    parallax: true,
    minSpeedX: 0.3,
    minSpeedY: 0.2,
    maxSpeedX: 0.9,
    maxSpeedY: 0.6,
    density: 8000,
    particleRadius: 6,
    lineWidth: 0.9,
    proximity: 140,
    parallaxMultiplier: 8
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);