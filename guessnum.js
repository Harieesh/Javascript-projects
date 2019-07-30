document.getElementById("checkit").onclick = function(){
				var randomnum = (Math.floor(Math.random()*11));
				var randomnum1 = document.getElementById("guess").value;

				if(randomnum1==randomnum)
				{
					alert("Congrats");
				}
				else
				{
					
					alert("Wrong! The number is  " + randomnum);

				}
			}