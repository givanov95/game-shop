function casino() {

		  

		var casinoImg = document.getElementsByClassName('casino-image');

		var pari =  document.getElementById("budget");
		var budget = pari.innerHTML;
		var total = parseInt((budget)-1);
		  sessionStorage.setItem("casinoBudget", total);

		if(total<0) { 
		
			document.getElementsByClassName('casino-body')[0].innerHTML='<div class="game-over">Game Over <a href="shop.html"> Към магазина</a> </div>';


		}
		else {
		pari.innerHTML= total+"";
		}		
		

		function start(counter){
  
  if(counter < 10){
    setTimeout(function(){
      counter++;
       
      for (var i = 0; i < casinoImg.length; i++) {
      	casinoImg[i]      
       if(counter>5) {
    	casinoImg[0].setAttribute("src", 'images/casino/'+counter+'.jpg' );
    	casinoImg[1].setAttribute("src", 'images/casino/'+(counter+1)+'.jpg' );

    	casinoImg[2].setAttribute("src", 'images/casino/'+(counter+2)+'.jpg' );
    }

    }
    
      start(counter);
    }, 50);
  }
}
start(0);
		setTimeout(function first(){
			var first = Math.floor((Math.random() * 10) + 1);
			

		if(first<=5) { 
			casinoImg[0].setAttribute("src",'images/casino/seven.png');
			}

			else{ 
				casinoImg[0].setAttribute("src", 'images/casino/'+first+'.jpg')
			}

		}, 800);

	setTimeout(function second(){
		var sec = Math.floor((Math.random() * 10) + 1);
			if(sec<=5) { 
			casinoImg[1].setAttribute("src",'images/casino/seven.png');
			}

			else{ 
				casinoImg[1].setAttribute("src", 'images/casino/'+sec+'.jpg')
			}

				}, 1000);



		setTimeout(function third(){
			var third = Math.floor((Math.random() * 10) + 1);


			if(third<=5) { 
			casinoImg[2].setAttribute("src",'images/casino/seven.png');
			}

			else{ 
				casinoImg[2].setAttribute("src", 'images/casino/'+third+'.jpg')
			}


		}, 1300 );


		setTimeout(function winCheck(){
		var src0 = casinoImg[0].getAttribute("src");	 
		var src1 = casinoImg[1].getAttribute("src");
		var src2 = casinoImg[2].getAttribute("src");
		

		if(src0 == src1 && src1 == src2) {
	   var info = document.getElementById("info");
	   info.innerHTML='Честито, ти спечели нови 10 лв., които може да използваш в магазина и казиното <span id="close"  onclick="hide();return false;" >X</span>';

	   pari.innerHTML= (total+10)+"";



	   info.style.display = "block";


	   }

		}, 2000);

	}

	

		function hide(){ 

	 	document.getElementById("info").style.display = "none"
		}



var budgetElement = document.getElementById('budget');
 var budgetElement = document.getElementById('budget');
		  var x = sessionStorage.getItem("test1");
		 
		  
  			if(x){
		 
		  budgetElement.innerHTML = x;
		    sessionStorage.setItem("test1", x);

			} 
		else {
			 
			 var y = Math.floor((Math.random() * 10) + 1);
			 budgetElement.innerHTML = y;

		}


		function getbudget() { 
			var kinti = document.getElementById('budget').innerHTML;


		  sessionStorage.setItem("test1", kinti);
		 
		}

		  