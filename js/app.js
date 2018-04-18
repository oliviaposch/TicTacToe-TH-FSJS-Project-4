(function(){

	function tictactoe(){

		/*****************************
			DISPLAY THE WINNER SCREENS
		******************************/
		
		function displayWinner(winner, text){
			let bodyDiv = document.getElementsByTagName('body')[0];
			const divEnd = document.createElement('div');
			divEnd.classList.add('screen', 'screen-win', winner);
			divEnd.setAttribute('id', 'finish');
			const header = document.createElement('header');//creating header element
			const h1 = document.createElement('h1');
			h1.textContent = 'Tic Tac Toe';

			const pTag = document.createElement('p');
			pTag.classList.toggle('message');
			pTag.textContent = text; 

			const aLink = document.createElement('a');
			aLink.textContent = 'New game';
			aLink.setAttribute('href', '#');
			aLink.classList.toggle('button');
			
			//add children Elm. to header
			header.appendChild(h1);
			header.appendChild(pTag);
		
			header.appendChild(aLink);
			divEnd.appendChild(header);
			bodyDiv.appendChild(divEnd);

			const buttons =  document.getElementsByClassName('button');
			for(let i = 0; i < buttons.length; i++){
				buttons[i].addEventListener('click', function(){
					const divs = document.getElementsByClassName('screen-win');
					for(let i = 0; i < divs.length; i++){
						divs[i].style.display = 'none';	
					}
				})
			}	
		
		}
		
		/*****************************
			PLAY BORD TIC TAC TOE
		******************************/
			let player = 1;
			const squares = []; 
			let clicks = 0;

		function gamePlay(pclass, classWinner, msg ){//BOXES WIN COMBINATIONS

		    if(squares[0].classList.contains(pclass) && squares[1].classList.contains(pclass) && squares[2].classList.contains(pclass) || 
		    	squares[3].classList.contains(pclass) && squares[4].classList.contains(pclass) && squares[5].classList.contains(pclass) || 
		    	squares[6].classList.contains(pclass) && squares[7].classList.contains(pclass) && squares[8].classList.contains(pclass)){
				reset();//reset game
				displayWinner(classWinner, msg);
   
     		} else if(squares[0].classList.contains(pclass) && squares[3].classList.contains(pclass) && squares[6].classList.contains(pclass) || 
     			squares[1].classList.contains(pclass) && squares[4].classList.contains(pclass) && squares[7].classList.contains(pclass) ||
    			squares[2].classList.contains(pclass) && squares[5].classList.contains(pclass) && squares[8].classList.contains(pclass)){
       			reset();//reset game
       			displayWinner(classWinner, msg);

      		} else if(
		        squares[0].classList.contains(pclass) && squares[4].classList.contains(pclass) && squares[8].classList.contains(pclass) || 
		        squares[6].classList.contains(pclass) && squares[4].classList.contains(pclass) && squares[2].classList.contains(pclass)){      
		        reset(); //reset game
		        displayWinner(classWinner, msg); 
	       
	      } else if(clicks === 9) {
	          reset();
	          displayWinner("screen-win-tie", "It's a Tie!");
	        }
		}

		function reset(){//to reset styling classes after to win the game
		   for(let i = 0; i < squares.length; i++){
		        squares[i].classList.remove('box-filled-1');
		        squares[i].classList.remove('box-filled-2');
		     clicks = 0;
		      }
		}

		function hoverbkgImgO(){//hover svg img bkg
			const boxesHover =  document.getElementsByClassName('box');
			for(let i = 0; i < boxesHover.length; i++){
				boxesHover[i].addEventListener('mouseover', function(event){
					event.target.style.backgroundImage = 'url(img/o.svg)';
				});
				boxesHover[i].addEventListener('mouseout', function(event){
					event.target.style.backgroundImage = '';
				});
			}
		}
		function hoverbkgImgX(){ //hover svg img bkg
			const boxesHover =  document.getElementsByClassName('box');
			for(let i = 0; i < boxesHover.length; i++){
				boxesHover[i].addEventListener('mouseover', function(event){
					event.target.style.backgroundImage = 'url(img/x.svg)';
				});boxesHover[i].addEventListener('mouseout', function(event){
					event.target.style.backgroundImage = '';
				});
			}
		}

		function board(){//Play board function
			let bodyDiv = document.getElementsByTagName('body')[0];
			const divBoard = document.createElement('div');
			divBoard.classList.toggle('board');
			divBoard.setAttribute('id', 'board');
			const header = document.createElement('header');//create elem header
			const h1 = document.createElement('h1');//create children elements for Header
			h1.textContent = 'Tic Tac Toe';
			const headerUl = document.createElement('ul');
			const headerLi = `<li id="player1" class="players player1 active"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path class= "active-player" d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg></li>
					    	  <li id="player2" class="players player2"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path class="active-player" d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg></li>
					    	`;
			const boxes = document.createElement('ul');//boxes board
			boxes.classList.toggle('boxes');

			divBoard.appendChild(header);
			divBoard.appendChild(boxes);
			header.appendChild(h1);
			header.appendChild(headerUl);
			headerUl.innerHTML = headerLi;
			
			for(let i = 1; i <= 9; i++){ //dynamically created List Elements
					let li = document.createElement('li');
					li.className = 'box';
					boxes.appendChild(li);  
			    	squares.push(li);  
			  }
			
			for(let j = 0; j < squares.length; j++){ //track turns and who wins the game
			    squares[j].addEventListener('click', function(){ 
			      clicks += 1;  
			      if(player == 1){
			      	hoverbkgImgX();
			      	document.getElementById('player1').classList.remove('active');
			      	document.getElementById('player2').classList.add('active');
			        squares[j].classList.toggle('box-filled-1');
			        player -= 1; 
			        gamePlay('box-filled-1', 'screen-win-one', 'Winner'); //if squares has data and that data are in all of my combinations player wins
			      }else{
			      	 hoverbkgImgO()
			      	document.getElementById('player2').classList.remove('active');
			      	document.getElementById('player1').classList.add('active');
			        squares[j].classList.toggle('box-filled-2');
			        player += 1; 
			        gamePlay('box-filled-2', 'screen-win-two', 'Winner');
			      }
			    })
			 }

			bodyDiv.appendChild(divBoard);
			
		}

		
		/*****************************
			START PLAYING
		******************************/

		function start(){ //start playing function
			let bodyDiv = document.getElementsByTagName('body')[0];
			const divStart = document.createElement('div');
			divStart.classList.add('screen', 'screen-start');
			divStart.setAttribute('id', 'start');
			const header = document.createElement('header');//create elem header
			const h1 = document.createElement('h1');//create children elements for Header
			h1.textContent = 'Tic Tac Toe';

			const aLink = document.createElement('a');
			aLink.textContent = 'Start game';
			aLink.setAttribute('href', '#');
			aLink.classList.toggle('button');

			//add children Elm. to header
			header.appendChild(h1);
			
			header.appendChild(aLink);
			divStart.appendChild(header);

			bodyDiv.appendChild(divStart);

		}


		/*****************************
			TIC TAC TOE GAME
		******************************/
		window.addEventListener('load', function(){

			start();
			const buttons =  document.getElementsByClassName('button');
			for(let i = 0; i < buttons.length; i++){
				buttons[i].addEventListener('click', function(){
					document.body.innerHTML = '';
					board();
					hoverbkgImgO();
				})
			}
	
		});

	
		

}
	tictactoe();
}());