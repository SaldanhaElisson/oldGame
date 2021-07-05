import check from './check.js' 

class Game {

     constructor(){
        this.container = document.querySelector('.container');
        this.player;    
        this.round = 1;   
        this.game = document.querySelectorAll('.game div')
    }

   start(){
        this.Play()         
    }

    

    Play(){
        this.game.forEach((square) =>{   
            square.addEventListener('click',()=>{
                const parOrImpar = this.round % 2 == 0 
                this.innerPath(square, parOrImpar)
                
            })       
        })
        
    }

    innerPath(element, round){
        const shape = round == true ? 'circle' : 'xis';

        if(element.children.length < 1){



            const div = document.createElement('div')
            div.classList.add(shape)

            element.appendChild(div)
            
            this.round++
    }
        this.verifyPlay(shape)

        }

    async verifyPlay(player){
        if(check()){
           alert(`Parabens o jogador que está jogando com o ${player}` )
           setTimeout(function(){ window.location.reload(); }, 3000);
            
        }
        
              
    }
        
}

// create element of game
const game = new Game();
const buttonStart = document.querySelector('.start')

// start game
buttonStart.addEventListener('click', () =>{
    game.start();
    buttonStart.classList.add('started')
})
    



