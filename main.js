var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 700;
canvas.height = window.innerHeight - 400;

var img2 = new Image();
img2.src = 'dinosaur.png';

var dion = {
    x : 10,
    y: 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y, this.width, this.height);
    }
}

var img1 = new Image();
img1.src = 'cactus.png';

class Cactus {
    constructor(){
        this.x = 360;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y, this.width, this.height);
    }
}

var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var animation;

function 프레임마다실행할거 (){
    animation = requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);

    if (timer % 100 === 0){
        var cactus = new Cactus();
        cactus여러개.push(cactus);
    }

    cactus여러개.forEach((a, i, o)=> {
        if (a.x <0){
            o.splice(i,1)
        }
        a.x--;

        충돌하냐(dion, a);

        a.draw();

    })

    if (점프중 == true){
        dion.y--;
        점프timer++;
    }
    if (점프중 == false){
        if (dion.y < 200) {
            dion.y++;
        }
    }

    if (점프timer > 100) {
        점프중 = false;
        점프timer = 0
    }


    dion.draw()
}



프레임마다실행할거();

function 충돌하냐(dion, cactus) {
    var x축차이 = cactus.x - (dion.x + dion.width);
    var y축차이 = cactus.y - (dion.y + dion.height);
    if (x축차이 < 0 && y축차이 < 0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
     }
}


var 점프중 = false;
document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
        점프중 = true;    
    }
})


// Get the canvas element
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set initial canvas size
resizeCanvas();

// Listen for window resize event
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth * 0.5 ; 
    canvas.height = window.innerHeight * 0.5; 

}
