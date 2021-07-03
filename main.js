import check from './check.js' 

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
            
        if(element.children.length < 1){

            const shape = round == true ? 'circle' : 'xis';
            

            const div = document.createElement('div')
            div.classList.add(shape)

            element.appendChild(div)
            
            this.round++
    }
        this.verifyPlay()

        }

    verifyPlay(){
        console.log(check())
              
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
    

// table1 a == table2 a == table3 a
// table1 b == table2 b == table3 b
// table1 c == table2 c == table3 c


// let i = 1
// let tables = table${i}.selectar all
// tables[0].children.classList = tables[0].children.classList = tables[0].children.classList 

//let letters = [a, b, c]

//letter.forEach((lett)=>{
// letter = lett.selectar all
//})
// letter[0].children.classList = letter[0].children.classList = letter[0].children.classList 

// letterSquencia

//sequencia = []

// abc = [a,b,c]
// abc.forEach((letter)={
 //   sequencia.push(selector(.letter))
//})

//sequencia[0].children.classlist = sequencia[1].children.classlist = sequencia[2].children.classlist  

//

