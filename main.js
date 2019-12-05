var game = new GameController();
var g_ctx = game.ctx;



game.run();

function draw(color){
    g_ctx.beginPath();
    g_ctx.rect(0,0,300,300);
    g_ctx.fillStyle=color;
    g_ctx.fill();
    g_ctx.closePath();
}



animate();
function animate(){
    requestAnimationFrame(animate); //loopスタート

    if(game.flg['a']) draw('#ffffff');
    if(game.flg['b']) console.log(2);
    if(game.flg['c']) console.log(3);
    if(game.flg['d']) console.log(4); 
    if(game.flg['left']) console.log(5);
    if(game.flg['right']) console.log(6);
    if(game.flg['up']) console.log(7);
    if(game.flg['down']) console.log(8); 
    
}