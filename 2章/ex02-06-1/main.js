$(document).ready(function(){
  'use strict';
  let c = Shape.Circle(200, 200, 50);
  c.fillColor = 'green';
  //console.log('jQuery はすでにロードされているはず。');
  //console.log('main.js をロードした。\n');
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  /*描画*/
  paper.view.draw();
});
