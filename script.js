//Data variables
let scale = 10;
let position_x = 1;
let position_y = 1;
let velocity_x = 0;
let velocity_y = 0;
let g = 9.8;
let frame_rate = 0;
let delay = 10;

// Display variables
const cannon_ball = document.querySelector(".cannon-ball");
const start_btn = document.querySelector(".start_btn");
const vel_x_input = document.querySelector(".vel_x");
const vel_y_input = document.querySelector(".vel_y");
const frm_rate_input = document.querySelector(".frm_rate");

// update the value of variable
function update(){
    position_x += velocity_x * delay/1000;
    position_y += velocity_y * delay/1000;
    velocity_y -= g * delay/1000;
    if(position_y <= 0 )
    {
        velocity_y = -1 * velocity_y - 5;
        velocity_x -= 1;
        if(velocity_y < 0)
    {
        velocity_y = 0;
    }
        if(velocity_x < 0)
        {
            velocity_x = 0;
        }
    }
}
//paints the screen according the values
function paint(){
    cannon_ball.style.bottom = `${position_y * scale}px`;
    cannon_ball.style.left   = `${position_x * scale}px` ;
}
//Updates and paints
function render(){
    update();
    paint();
}

function start(){
    velocity_x = vel_x_input.value;
    velocity_y = vel_y_input.value;
    frame_rate = frm_rate_input.value;
    delay = 1000/frame_rate;
    console.log(`${velocity_x} ${velocity_y} ${frame_rate}`)
    setInterval(render, delay);
}

start_btn.addEventListener("click", start);