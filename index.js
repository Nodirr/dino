let dino = document.querySelector('.dino')
let cactus = document.querySelector('.cactus')
let score = document.querySelector('.score')

function jump(){
    if (dispatchEvent.classList != 'jump'){
        dino.classList.add('jump')
          setTimeout(() =>{
            dino.classList.remove('jump')
          }, 500);
    }
  
}

const funcLive = setInterval(() => {
    let dinotepaga = parseInt(
        window.getComputedStyle(dino).getPropertyValue('top')
    )
    let cactusChapga = parseInt(
        window.getComputedStyle(cactus).getPropertyValue('left')

    )
if(cactusChapga > 0 && cactusChapga < 60 && dinotepaga >= 150){
dino.style.animationPlayState = 'paused';
cactus.style.animationPlayState = 'paused';






    alert("GAME OVER!")
    window.location.replace('/home.html')
}
});

document.addEventListener('keydown', function(){
    jump()
    score.innerHTML ++

    if(score.innerHTML >= 3){
        cactus.style.animation = 'cactus 1s infinite linear'

    } else if (score.innerHTML >= 7) {
        cactus.style.animation = 'cactus .2s infinite linear'
    }
})

