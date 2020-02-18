$(document).ready(function(){
  'use strict';

  let tool = new Tool();

  tool.onMouseDown = function(event){
    let c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
  };

  //console.log('jQuery はすでにロードされているはず。');
  //console.log('main.js をロードした。\n');
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  /*描画*/
  paper.view.draw();
});
