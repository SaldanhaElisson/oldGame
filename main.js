 

class Game {

     constructor(){
        this.container = document.querySelector('.container');
        this.player;    
        this.round = 1;   
        this.game = document.querySelectorAll('.game div')
    }

   start(){
      identifyPlayers()          
    }

    identifyPlayers(){

        this.container.addEventListener('click',(e)=>{
            const el =e.target;
            let play;
            
            if(el.classList.contains('onePlay')){
                play = "onePlay"
            } else if(el.classList.contains('twoPlay')){
                play = "twoPlay"
            }

            
            this.player = play
            this.Play() 
        })
               
    }

    Play(){
        if(this.player == 'twoPlay'){
            console.log('twoPLay')
           
            console.log(this.round)  

            this.game.forEach((square) =>{   
                square.addEventListener('click',()=>{
                    const parOrImpar = this.round % 2 == 0 
                    this.innerPath(square, parOrImpar)
                })       
            })
            
          
        }
    }

    innerPath(element, round){
        console.log(element.children)
            
        if(element.children.length < 1){

            const shape = round == true ? 'circle' : 'xis';
            console.log(shape)

            const div = document.createElement('div')
            div.classList.add(shape)

            element.appendChild(div)
            
            this.round++

            this.verifyPlay(element)
    }
        }

    verifyPlay(element){
       
        if(element.children.length > 0){
            
            const classTable = element.classList.value
            console.log(classTable)
            const test = document.querySelectorAll(`.${classTable}`)
            console.log(test)
            
        }

    }

        
}


// create element of game
const game = new Game();
const buttonStart = document.querySelector('.start')

// start game
buttonStart.addEventListener('click', () =>{
    game.identifyPlayers()
    buttonStart.classList.add('started')
})
    



