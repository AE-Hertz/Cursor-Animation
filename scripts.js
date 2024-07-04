let banner = document.querySelector('.banner');
let canvas = document.getElementById('dotsCanvas');
let openGithub = document.getElementById('openGit');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
ctx = canvas.getContext('2d');

let dots = [];
const arrayColors = ['#CCE8CC', '#F6EFEE', '#E2B6CF' , '#E396DF', '#E365C1' , '#afaeae55'];



for (let index = 0 ; index < 100 ; index++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5, 
        color: arrayColors[Math.floor(Math.random() * 5)]
    });
}

const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x , dot.y , dot.size , 0 , Math.PI*2);
        ctx.fill();
    })
}

drawDots();

banner.addEventListener('mousemove', (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    let mouse = {
        x: e.pageX - banner.getBoundingClientRect().left,
        y: e.pageY - banner.getBoundingClientRect().top
    }

    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) **2);       // formula d=√((x2 – x1)² + (y2 – y1)²)
        if(distance < 300){
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x , dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})
banner.addEventListener('mouseout' , ()=> {
    ctx.clearRect(0, 0 , canvas.width , canvas.height);
    drawDots();
})

window.addEventListener('resize' , () => {
    ctx.clearRect(0, 0 , canvas.width , canvas.height);
    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;

    dots = [];
    for(let index = 0 ; index < 50 ; index++){
        dots.push({
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5, 
            color: arrayColors[Math.floor(Math.random() * 5)]
        })
    }
    drawDots();
})

openGithub.onclick = () => {
    window.open('https://github.com/AE-Hertz') ;
};
