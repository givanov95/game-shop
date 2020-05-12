
		function cartContent() { 

			var cart = document.getElementById("cart-contain");
			var cartTotal = document.getElementById("cart-total-price");
			
			if(cart.style.display=="inline-block") { 
				cart.style.display= "none"
				cartTotal.style.display= "none"
			}

			else { 

			cart.style.display="inline-block";
			cartTotal.style.display="inline-block";
		}

	}

		function addToCard() { 
			var productsCount = document.getElementById('cartCount');
			var total = document.getElementById('total');
			var cena = document.getElementById('cena');
			var current = parseInt(productsCount.innerHTML);

			if(parseInt(total.innerHTML)+parseInt(cena.innerHTML) > budget ) { 
				document.getElementById("info").innerHTML = "Ами сега? ... Нямаш достатъчно пари.<a href='casino.html' style='color:blue; onclick='createItem(); return false;'>Отиди в казиното</a>"
			}

			else{
				var img = document.getElementById("image").getAttribute("src");
				var selected = document.getElementsByTagName("select");
				for (var i = 1; i < selected.length; i++) {
					if(selected[i].style.display=="inline-block") { 
						var isempty = selected[i].value;
						if(isempty>0){
							total.innerHTML = parseInt(total.innerHTML) + parseInt(selected[i].value);
							productsCount.innerHTML = (current+1) + "";
							var cartContain = document.getElementById('cart-contain');
							cartContain.innerHTML = cartContain.innerHTML+ "<table id='myTable'><td>"+ selected[i].options[selected[i].selectedIndex].text+ "</td>"+"<td data-value="+selected[i].value+">"+ selected[i].value+' лв.<td><img src="'+img+'"><td><a class="delete" href="#" onclick="del(this)">X</a><td></tr>';

							 sessionStorage.setItem("cart", cartContain.innerHTML);

							document.getElementById('cart-total-price').innerHTML= "Oбща сума за плащане: <span id='kinti'>"+ total.innerHTML+ "</span> лв." ;

						}

						else {
							alert("Избери продукт");
						}
					}

				}

			}
		}
		var priceContent = document.getElementsByClassName("product-content")[0];

		var all = sessionStorage.getItem("test1");

		if(all) {
			var budget = all;

		}

			else {
				var budget = Math.floor((Math.random() * 10) + 1);

			}
		

		
		var cartLink = document.getElementById('cartLink');
		var elements = document.getElementById('type');
		var budgetElement = document.getElementById('budget');
		var price = document.getElementById('price');		 	
		var selected = document.getElementsByTagName("select");
		var number = elements.value;

		budgetElement.innerHTML = budget + "лв.";
	

		elements.addEventListener("change", function() {
			for (var i = 1; i < selected.length; i++) {
				selected[i].style.display="none";
			}
			priceContent.style.display="none";
			var number = parseInt(this.value);
			selected[number].style.display="inline-block";
			priceContent.style.display="none";
			

			price.innerHTML = "Цената на този продукт е <span id='cena'> " + 0 +"</span>лв.";


			selected[number].addEventListener("change", function() {

				
				priceContent.style.display="inline-block";

			
				var recepta = this.options[this.selectedIndex].getAttribute("data-recepta");
					if(recepta){
				document.getElementById("recepta").innerHTML= "Вижте рецепти за "+this.options[this.selectedIndex].innerHTML+ " тук: <a href="+recepta+" target='_blank'>Ястия с "+this.options[this.selectedIndex].innerHTML+"</a>";
					}
					else { document.getElementById("recepta").innerHTML="";}	
					var img = this.options[this.selectedIndex].getAttribute("data-src");
					var image = document.getElementById("image");
					image.setAttribute("src", img);
				price.innerHTML = "Цената на този продукт е <span id='cena'> " + this.value +"</span>лв.";
				
		});
	});

		  sessionStorage.setItem("test1", budget);


		// Copied from Neta

		function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob(["\uFEFF"+csv], {
    type: 'text/csv; charset=utf-18'
}); // Format UTF

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");
	
    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
		
        for (var j = 0; j < cols.length; j++) {
        	if (j!=2) {
            row.push(cols[j].innerText);
        }

        }
        
		csv.push(row.join(","));		
	}

    // Download CSV
    download_csv(csv.join("\n"), filename);
}

document.querySelector("button").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
	export_table_to_csv(html, "table.csv");
});

function del(red) {
   var element = red.parentNode.parentElement.parentElement.remove();

 tsena =  parseInt(document.getElementById("total").innerHTML);
 tsena = tsena - red.parentNode.parentNode.childNodes[1].getAttribute('data-value');
 document.getElementById("total").innerHTML= tsena;

  var productsCount = parseInt(document.getElementById('cartCount').innerHTML)-1;

 document.getElementById('cartCount').innerHTML = productsCount;

 var kinti = parseInt(document.getElementById('kinti').innerHTML)-(red.parentNode.parentNode.childNodes[1].getAttribute('data-value')); 

document.getElementById('kinti').innerHTML = kinti;


}





