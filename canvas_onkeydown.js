(function(){
  var canvas1 = document.getElementById("canvas1");
  var ctx = canvas1.getContext("2d");

  var x = 0; var MAX_X = 200;
  var y = 0; var MAX_Y = 200;
  //キー入力
  document.onkeydown = keydown;
  drawCaeru(x, y);

  /* 参考リンク: http://www.ipentec.com/document/document.aspx?page=javascript-accept-keydown */
  function keydown(e){
    //キー入力した際のデフォルト無効
    e.preventDefault();
    var target = document.getElementById("message");
    target.innerHTML = "キーが押されました KeyCode :" + e.keyCode;
    // ←
    if(e.keyCode===37){
      if(x > -MAX_X/2 ){
        x -= 1;
        drawCaeru(x, y);
      }
    }else if(e.keyCode===38){
      // ↑
      if(y > -MAX_Y/2){
        y -= 1;
        drawCaeru(x, y);
      }
    }else if(e.keyCode===39){
      // →
      if(x < MAX_X/2){
        x += 1;
        drawCaeru(x, y);
      }
    }else if(e.keyCode===40){
      // ↓
      if(y < MAX_Y/2){
        y += 1;
        drawCaeru(x, y);
      }
    }
  }
  //カエルの描画
  function drawCaeru(x, y){
    ctx.clearRect(0, 0, MAX_X, MAX_Y);
    ctx.save();
    ctx.translate(x, y);
    caeru();
    ctx.restore();
  }

  function caeru(){
    //顔
    ctx.beginPath();
    ctx.scale(2, 1);
    ctx.arc(50, 100, 30, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = "#3e3";
    ctx.fill();
    ctx.scale(0.5, 1);

    //左目
    ctx.beginPath();
    ctx.arc(70, 60, 20, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = "#fafafa";
    ctx.fill();
    //右目
    ctx.beginPath();
    ctx.arc(130, 60, 20, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();
    //左目瞳
    ctx.beginPath();
    ctx.arc(70, 60, 5, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = "#333";
    ctx.fill();
    //右目瞳
    ctx.beginPath();
    ctx.arc(130, 60, 5, 0, 2 * Math.PI, false);
    ctx.fill();

    //口
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(50, 100);
    /* http://www.html5.jp/canvas/ref/method/bezierCurveTo.html */
    ctx.bezierCurveTo(70, 120, 120, 120, 150, 100);
    ctx.stroke();
  }
})();
