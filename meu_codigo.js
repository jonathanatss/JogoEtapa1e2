a = parseInt(prompt("Digite o coeficiente de segundo grau"));
b = parseInt(prompt("Digite o coeficiente de primeiro grau"));
c = parseInt(prompt("Digite o coeficiente independente"));

delta = (b*b)-4*a*c;

if (delta<0){
	alert("Essa função não tem raízes!");
}

if (delta=0){
	raiz = -b/(2*a);
	alert(raiz);
	}

if (delta>0){
	raiz1 = b+Math.sqrt(delta)/(2*a);
	raiz2 = b-Math.sqrt(delta)/(2*a);
	
	alert("A função tem duas raízes" + raiz1 "e" + raiz2);
}
