var number=1;

function change1(){
    document.getElementById("big").src="images/medium/5855774224.jpg";
    number=1;
}
function change2(){
    document.getElementById("big").src="images/medium/5856697109.jpg";
    number=2;
}
function change3(){
    document.getElementById("big").src="images/medium/6119130918.jpg";
    number=3;
}
function change4(){
    document.getElementById("big").src="images/medium/8711645510.jpg";
    number=4;
}
function change5(){
    document.getElementById("big").src="images/medium/9504449928.jpg";
    number=5;
}

function over() {
    switch (number) {
        case 1:
        {document.getElementById("title").innerText = "Battle";document.getElementById("big").title="Battle";break;}
        case 2:
        {document.getElementById("title").innerText = "Luneburg";document.getElementById("big").title="Luneburg";break;}
        case 3:
        {document.getElementById("title").innerText = "Bermuda";document.getElementById("big").title="Bermuda";break;}
        case 4:
        {document.getElementById("title").innerText = "Athens";document.getElementById("big").title="Athens";break;}
        case 5:
        {document.getElementById("title").innerText = "Florence";document.getElementById("big").title="Florence";break;}
    }
    document.getElementById("title").style.opacity = '80';
    document.getElementById("title").style.transitionDuration="1s";
}
function out() {
    document.getElementById("title").style.opacity = '0';
    document.getElementById("title").style.transitionDuration="1s";
}
