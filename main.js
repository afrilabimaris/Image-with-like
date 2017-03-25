			function myFunction(id){
    			var el = document.getElementById("demo" + id)
    			var counter = el.getAttribute("data-count");

    			var value = isNaN(parseInt(counter)) ? 2903 : parseInt(counter);
    			var result = value + 1;

    			el.innerHTML = result;
    			el.setAttribute("data-count", result);
				}