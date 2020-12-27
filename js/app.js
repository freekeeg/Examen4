/*Desarrolla la funcionalidad de la calculadora utilizando el patrón módulo, es decir que todo el código debe estar englobado en un objeto llamado Calculadora. Utiliza un método de inicialización que se encargue de ejecutar todas las otras funciones que se deben iniciar con la ejecución del programa.
3Crea los métodos que consideres necesarios para hacer que la tecla presionada reduzca su tamaño y vuelva a su forma original al soltarla.
4Para efectos de este proyecto sólo realizaremos las 4 operaciones básicas: suma, resta, multiplicación y división. El botón que indica raíz cuadrada sólo hace parte del diseño general de la calculadora y no es necesario que lo implementes.*/


var Calculadora = (function(num){
    var numeroBase = 0;
    var numeroPrincipal = 0;
    var numeroComplementario = 0;
    var numeroAux = 0;

    var operacion = null;
    var operacionAuxiliar = null;
    var resultado = 0;
    var punto = false;
    function SetNumero(numero){
        this.numeroBase = numero;
        console.log("actualiza numero " + this.numeroBase);
    }
    function SetNumeroPrincipal(numero){
        this.numeroPrincipal = numero;
        console.log("actualiza numero principal " + this.numeroPrincipal);
    }
    function SetNumeroComplementario(numero){
        this.numeroComplementario = numero;
        console.log("actualiza numeroComplementario " + this.numeroComplementario);
    }
    function SetNumeroAux(numero){
        this.numeroAux = numero;
        console.log("actualiza numeroAux " + this.numeroAux);
    }

    function SetOperacion(op){
        this.operacion = op;
        console.log("actualiza operacion " + this.operacion);
    }
    function SetOperacionAuxiliar(op){
        this.operacionAuxiliar = op;
        console.log("actualiza operacion Auxiliar " + this.SetOperacionAuxiliar);
    }
    function SetResultado(res){        
        this.resultado = res;
        console.log("actualiza resultado " + this.resultado);
    }
    function SetPunto(point){        
        this.punto = point;
    }
  
    function GetNumero(){        
        return this.numeroBase;         
    }
    function GetNumeroPrincipal(){        
        return this.numeroPrincipal;         
    }
    function GetNumeroComplementario(){        
        return this.numeroComplementario;         
    }
    function GetNumeroAux(){        
        return this.numeroAux;         
    }

    function GetOperacion(){        
        return this.operacion;         
    }
    function GetOperacionAuxiliar(){        
        return this.operacionAuxiliar;         
    }
    function GetResultado(){   
        var stg = this.resultado.toString();
        var res = this.resultado;
        if (stg.length >7  && !stg.toString().includes('.') ) {            
            res = parseFloat(res).toFixed(7); 
            return "Excedido";         
        }if (stg.length >7 && stg.toString().includes('.')) {            
            res = parseFloat(res).toFixed(2);
        }else{
            return res;         
        }     
    }
    function GetPunto(){
        return this.punto;
    }

    function Estate(){
        console.log(
        " numeroBase " + this.numeroBase +
        " numeroPrincipal " + this.numeroPrincipal + 
        " numeroComplementario " + this.numeroComplementario +  
        " numeroAux " + this.numeroAux + 
        " operacion " + this.operacion +
        " operacionAuxiliar " + this.operacionAuxiliar +
        " resultado " + this.resultado +  
        " punto " + this.punto
        
        );
    }
    return{
        setNumero:function(){          
            if (document.getElementById("display").innerHTML == "0") {       
                SetNumeroAux(0);
                SetNumeroComplementario(0);
                numero = num;
                SetNumero(numero);
                document.getElementById("display").innerHTML = numero;
            }else if (document.getElementById("display").innerHTML.length <= 7 && document.getElementById("display").innerHTML != "0" && num != '.') {                                
                numero = numero.toString() + num.toString();
                SetNumero(numero);            
                document.getElementById("display").innerHTML = numero;
            }else if (document.getElementById("display").innerHTML.length >= 7) {                
                alert("El numero que intenta ingresar es: " + numero + " tiene mas de 8 caracteres");
            }else if (num == '.') {
                var puntoEstado = GetPunto();
                if (puntoEstado) {
                    alert("Usted ya ingrese un punto");
                }else{
                    SetPunto(true);
                    var display = document.getElementById("display").innerHTML;
                    numero = display + '.';
                    SetNumero(numero); 
                    document.getElementById("display").innerHTML = numero;                
                }
            }   
            
            
        },
        clear:function(){
            if (num  == "on") {
                SetNumero(0);
                SetNumeroPrincipal(0);    
                SetNumeroComplementario(0);   
                SetNumeroAux(0);
                SetOperacion(null);
                SetOperacionAuxiliar(null);
                SetResultado(0);
                SetPunto(false);
                document.getElementById("display").innerHTML = 0;                  
            }
        },      
        operacion:function(){
            var auxiliar = GetNumero();                        
            document.getElementById("display").innerHTML = 0;               
            var numeroAuxComp = GetNumeroAux();
            //alert("numeroAuxComp " + numeroAuxComp)

            if ((numeroAuxComp == 0 && num  == "=") || (numeroAuxComp == 0 && opera  == "=")) {    
                //Estate();
                var auxiliarComp = GetNumeroComplementario();                               
                SetNumeroAux(auxiliarComp);
                //Estate();
            }

            if (num  == '+' || num  == '-' || num  == '*' || num  == '/') {
                SetOperacion(num);
                SetNumeroPrincipal(auxiliar);     
                SetNumero(0)           
                Estate();                            
            }else if (num  == '=') {        
                SetNumero(auxiliar);
                SetNumeroComplementario(auxiliar);
                Estate();
                var opera = GetOperacion();
                var princ = GetNumeroPrincipal();
                var comp = GetNumeroComplementario();
                
                var opAux = GetOperacionAuxiliar()
                if(opera == '='){
                    var numeroAuxComp = GetNumeroAux();
                    console.log("doble =");                                                                       
                    Estate()
                    switch (opAux) {
                        case '+':
                            var resultado = parseFloat(comp) + parseFloat(numeroAuxComp);                                                                                   
                        break;
                        case '-':
                            var resultado = parseFloat(comp) - parseFloat(numeroAuxComp);                                                                                   
                        break;
                        case '*':
                            var resultado = parseFloat(comp) * parseFloat(numeroAuxComp);                                                                                   
                        break;
                        case '/':
                            var resultado = parseFloat(comp) / parseFloat(numeroAuxComp);                                                                                   
                        break;
                    } 
                    SetResultado(parseFloat(resultado));
                    SetNumero(parseFloat(resultado));
                    resultado = GetResultado(); 
                    SetNumeroComplementario(comp);
                    Estate();
                    document.getElementById("display").innerHTML = resultado;
                    SetOperacion(num);

                }
                if (opera == '+') {
                    var resultado = parseFloat(princ) + parseFloat(comp);
                    SetResultado(resultado);
                    SetNumero(resultado);  
                    resultado = GetResultado();
                    SetNumeroComplementario(comp);
                    Estate();
                    document.getElementById("display").innerHTML = resultado;
                    SetOperacion(num);
                    SetOperacionAuxiliar(opera);

                }else if (opera == '-') {
                    var resultado = parseFloat(princ) - parseFloat(comp);
                    SetResultado(resultado);
                    SetNumero(resultado);     
                    resultado = GetResultado()                        
                    Estate();
                    document.getElementById("display").innerHTML = resultado
                    SetOperacion(num);
                    SetOperacionAuxiliar(opera);            
                }else if (opera == '*') {
                    var resultado = parseFloat(princ) * parseFloat(comp);
                    SetResultado(resultado);
                    SetNumero(resultado); 
                    resultado = GetResultado()    
                    Estate();
                    document.getElementById("display").innerHTML = resultado
                    SetOperacion(num);
                    SetOperacionAuxiliar(opera);            
                }else if (opera == '/') {
                    var resultado = parseFloat(princ) / parseFloat(comp);
                    SetResultado(resultado);
                    SetNumero(resultado);     
                    resultado = GetResultado()    
                    Estate();
                    document.getElementById("display").innerHTML = resultado
                    SetOperacion(num);
                    SetOperacionAuxiliar(opera);            
                }            
            }else if(num == 'sign'){
                var signo = GetNumero();
                SetNumero('-'+signo);
                document.getElementById("display").innerHTML = -signo;
            
            }
        },
        efecto:function(){

            //alert(typeof(num))
            switch (num) {
                case 'on':
                    num = on                    
                break;
                case 'uno':
                    num = uno                    
                break;
                case 'dos':
                    num = dos                    
                break;
                case 'tres':
                    num = tres                    
                break;
                case 'cuatro':
                    num = cuatro                    
                break;
                case 'cinco':
                    num = cinco                    
                break;
                case 'seis':
                    num = seis                    
                break;
                case 'siete':
                    num = siete                    
                break;
                case 'ocho':
                    num = ocho                    
                break;
                case 'nueve':
                    num = nueve                    
                break;
                case 'cero':
                    num = cero                    
                break;
                case 'mas':
                    num = mas                    
                break;
                case 'menos':
                    num = menos                    
                break;
                case 'por':
                    num = por                    
                break;
                case 'dividido':
                    num = dividido                    
                break;
                case 'igual':
                    num = igual                    
                break;
                case 'sqr':
                    num = raiz                    
                break;
                case 'sign':
                    num = sign                    
                break;
                case 'punto':
                    num = punto                    
                break;                
            }            
            num.addEventListener("mousedown",() => {
                    num.setAttribute("style", "transform:scale(0.85,0.85)");
                })
            num.addEventListener("mouseup",()=>{
                num.setAttribute("style","transform:scale(1,1)")
            })
        }
    } 

});



//Limpia Teclado Listener display

var on= document.getElementById("on");
on.addEventListener("click", Calculadora('on').clear);
on.addEventListener("click", Calculadora('on').efecto);

//Teclado Operaciones Listener display
var sign = document.getElementById("sign");
sign.addEventListener("click", Calculadora('sign').operacion);
sign.addEventListener("click", Calculadora('sign').efecto);

var raiz = document.getElementById("raiz");
raiz.addEventListener("click", Calculadora('sqr').operacion);
raiz.addEventListener("click", Calculadora('sqr').efecto);
var dividido = document.getElementById("dividido");
dividido.addEventListener("click", Calculadora('/').operacion);
dividido.addEventListener("click", Calculadora('dividido').efecto);
var por = document.getElementById("por");
por.addEventListener("click", Calculadora('*').operacion); 
por.addEventListener("click", Calculadora('por').efecto); 
var mas= document.getElementById("mas");
mas.addEventListener("click", Calculadora('+').operacion);
mas.addEventListener("click", Calculadora('mas').efecto);
var menos = document.getElementById("menos");
menos.addEventListener("click", Calculadora('-').operacion);
menos.addEventListener("click", Calculadora('menos').efecto);
var igual = document.getElementById("igual");
igual.addEventListener("click", Calculadora('=').operacion); 
igual.addEventListener("click", Calculadora('igual').efecto); 
//Teclado Numerico Listener display
var punto = document.getElementById("punto");
punto.addEventListener("click", Calculadora('.').setNumero);
punto.addEventListener("click", Calculadora('punto').efecto);
var cero = document.getElementById("0");
cero.addEventListener("click", Calculadora(0).setNumero);
cero.addEventListener("click", Calculadora('cero').efecto);
var uno = document.getElementById("1");
uno.addEventListener("click", Calculadora(1).setNumero);
uno.addEventListener("click", Calculadora('uno').efecto);
var dos = document.getElementById("2");
dos.addEventListener("click", Calculadora(2).setNumero);
dos.addEventListener("click", Calculadora('dos').efecto);
var tres = document.getElementById("3");
tres.addEventListener("click", Calculadora(3).setNumero);
tres.addEventListener("click", Calculadora('tres').efecto);
var cuatro = document.getElementById("4");
cuatro.addEventListener("click", Calculadora(4).setNumero);
cuatro.addEventListener("click", Calculadora('cuatro').efecto);
var cinco = document.getElementById("5");
cinco.addEventListener("click", Calculadora(5).setNumero);
cinco.addEventListener("click", Calculadora('cinco').efecto);
var seis = document.getElementById("6");
seis.addEventListener("click", Calculadora(6).setNumero);
seis.addEventListener("click", Calculadora('seis').efecto);
var siete = document.getElementById("7");
siete.addEventListener("click", Calculadora(7).setNumero);
siete.addEventListener("click", Calculadora('siete').efecto);
var ocho = document.getElementById("8");
ocho.addEventListener("click", Calculadora(8).setNumero);
ocho.addEventListener("click", Calculadora('ocho').efecto);
var nueve = document.getElementById("9");
nueve.addEventListener("click", Calculadora(9).setNumero);
nueve.addEventListener("click", Calculadora('nueve').efecto);

/*Cambio estilo de botones
var ima = document.getElementsByTagName("img")
for (let i = 0; i < ima.length; i++) {
    if(i == 18){

    }else if (i < 12){
        ima[i].style.width="24%"
        ima[i].style.height="65px"    
    }
    

    
}
*/
//Ver de quitar operacion auxiliar - Falta hacer que al apretar = se ejecute la ultima operacion de nuevo