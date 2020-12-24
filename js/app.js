/*Desarrolla la funcionalidad de la calculadora utilizando el patrón módulo, es decir que todo el código debe estar englobado en un objeto llamado Calculadora. Utiliza un método de inicialización que se encargue de ejecutar todas las otras funciones que se deben iniciar con la ejecución del programa.
3Crea los métodos que consideres necesarios para hacer que la tecla presionada reduzca su tamaño y vuelva a su forma original al soltarla.
4Para efectos de este proyecto sólo realizaremos las 4 operaciones básicas: suma, resta, multiplicación y división. El botón que indica raíz cuadrada sólo hace parte del diseño general de la calculadora y no es necesario que lo implementes.*/


var Calculadora = (function(num){
    var numeroBase = 0;
    var numeroPrincipal = 0;
    var numeroComplementario = 0;
    var operacion = null;
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
    function SetOperacion(op){
        this.operacion = op;
        console.log("actualiza operacion " + this.operacion);
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
    function GetOperacion(){        
        return this.operacion;         
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
        console.log('numeroBase ' + this.numeroBase + ' numeroPrincipal ' + this.numeroPrincipal
        + ' numeroComplementario ' + this.numeroComplementario + ' operacion ' + this.operacion 
        + ' resultado '+ this.resultado);
    }
    return{
        setNumero:function(){            
            if (document.getElementById("display").innerHTML == "0") {                
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
                SetOperacion(null);
                SetNumeroPrincipal(0);    
                SetNumeroComplementario(0);   
                SetNumero(0);
                SetPunto(false);
                document.getElementById("display").innerHTML = 0;                

            }
        },      
        operacion:function(){
            var auxiliar = GetNumero();            
            document.getElementById("display").innerHTML = 0;            
            if (num  == "+" || num  == "-" || num  == "*" || num  == "/") {
                SetOperacion(num);
                SetNumeroPrincipal(auxiliar);     
                SetNumero(0)           
                Estate();
            }else if (num  == "=") {                
                SetNumeroComplementario(auxiliar);
                Estate();
                var opera = GetOperacion();
                var princ = GetNumeroPrincipal();
                var comp = GetNumeroComplementario();
                if (opera == "+") {
                    var resultado = parseFloat(princ) + parseFloat(comp);
                    SetResultado(resultado);
                    SetNumero(resultado);  
                    resultado = GetResultado()    
                    Estate();
                    document.getElementById("display").innerHTML = resultado
                    SetOperacion(num);
                }else if (opera == '-') {
                    var resultado = parseFloat(princ) - parseFloat(comp);
                    SetResultado(resultado);
                    SetNumero(resultado);     
                    resultado = GetResultado()                        
                    Estate();
                    document.getElementById("display").innerHTML = resultado
                    SetOperacion(num);
                }else if (opera == '*') {
                    var resultado = parseFloat(princ) * parseFloat(comp);
                    SetResultado(resultado);
                    SetNumero(resultado); 
                    resultado = GetResultado()    
                    Estate();
                    document.getElementById("display").innerHTML = resultado
                    SetOperacion(num);
                }else if (opera == '/') {
                    var resultado = parseFloat(princ) / parseFloat(comp);
                    SetResultado(resultado);
                    SetNumero(resultado);     
                    resultado = GetResultado()    
                    Estate();
                    document.getElementById("display").innerHTML = resultado
                    SetOperacion(num);
                }            
            }else if(num == 'sign'){
                var signo = GetNumero();
                SetNumero('-'+signo);
                document.getElementById("display").innerHTML = -signo;
            
            }
        }
    } 

})




var on= document.getElementById("on").addEventListener("click", Calculadora('on').clear);
var sign = document.getElementById("sign").addEventListener("click", Calculadora('sign').operacion);
var raiz = document.getElementById("raiz").addEventListener("click", Calculadora('sqr').operacion);
var dividido = document.getElementById("dividido").addEventListener("click", Calculadora('/').operacion);
var por = document.getElementById("por").addEventListener("click", Calculadora('*').operacion); 
var mas= document.getElementById("mas").addEventListener("click", Calculadora('+').operacion);
var menos = document.getElementById("menos").addEventListener("click", Calculadora('-').operacion);
var punto = document.getElementById("punto").addEventListener("click", Calculadora('.').setNumero);
var igual = document.getElementById("igual").addEventListener("click", Calculadora('=').operacion); 
//Teclado Numerico Listener display
var cero = document.getElementById("0").addEventListener("click", Calculadora(0).setNumero);
var uno = document.getElementById("1").addEventListener("click", Calculadora(1).setNumero);
var dos = document.getElementById("2").addEventListener("click", Calculadora(2).setNumero);
var tres = document.getElementById("3").addEventListener("click", Calculadora(3).setNumero);
var cuatro = document.getElementById("4").addEventListener("click", Calculadora(4).setNumero);
var cinco = document.getElementById("5").addEventListener("click", Calculadora(5).setNumero);
var seis = document.getElementById("6").addEventListener("click", Calculadora(6).setNumero);
var siete = document.getElementById("7").addEventListener("click", Calculadora(7).setNumero);
var ocho = document.getElementById("8").addEventListener("click", Calculadora(8).setNumero);
var nueve = document.getElementById("9").addEventListener("click", Calculadora(9).setNumero);

//Display
//document.getElementById("display").innerHTML = 2


 