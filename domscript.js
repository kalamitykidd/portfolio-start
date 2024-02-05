
		("#add").addEventListener("click"), () => function (){

            const newParagraph = document.createElement("p");
            
            const text = document.createTextNode("Testing paragraph");
            newParagraph.appendChild(text);
        
            
        const firstParagraph = ("p");
        const parent = firstParagraph.parentNode;

        parent.insertBefore(newParagraph, firstParagraph.nextElementSibling);
        function changeColors() {
            document.body.style.backgroundColor = "ivory"; 
            paraDiv.style.backgroundColor = "green";  
            paraDiv.style.color = "black";
        }
        
        orChangeButton = document.createElement("button");
            colorChangeButton.textContent = "Change Colors";
            colorChangeButton.onclick = changeColors;
            document.body.appendChild(colorChangeButton);
        }
