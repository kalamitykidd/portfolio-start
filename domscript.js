
		$("#changeButton").addEventListener("click"), () => function changeColors() {
            document.body.style.backgroundColor = "ivory"; 
            paraDiv.style.backgroundColor = "green";  
            paraDiv.style.color = "black";
        
        
        orChangeButton = document.createElement("button");
            colorChangeButton.textContent = "Change Colors";
            colorChangeButton.onclick = changeColors;
            document.body.appendChild(colorChangeButton);
        }

           
        
