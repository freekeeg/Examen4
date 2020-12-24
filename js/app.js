/*Desarrolla la funcionalidad de la calculadora utilizando el patrón módulo, es decir que todo el código debe estar englobado en un objeto llamado Calculadora. Utiliza un método de inicialización que se encargue de ejecutar todas las otras funciones que se deben iniciar con la ejecución del programa.
3Crea los métodos que consideres necesarios para hacer que la tecla presionada reduzca su tamaño y vuelva a su forma original al soltarla.
4Para efectos de este proyecto sólo realizaremos las 4 operaciones básicas: suma, resta, multiplicación y división. El botón que indica raíz cuadrada sólo hace parte del diseño general de la calculadora y no es necesario que lo implementes.*/


var Calculadora = (function(num){
    var numeroBase = 0;
    var numeroPrincipal = 0;
    var numeroComplementario = 0;
    var operacion = null;
    var resultado = 0;
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
        return this.resultado;         
    }
    function Estate(){
        console.log('numeroBase '+ this.numeroBase +' numeroPrincipal ' + this.numeroPrincipal+' numeroComplementario '+ this.numeroComplementario +' operacion '+ this.operacion +' resultado '+ this.resultado)
    }
    return{
        setNumero:function(){            
            if (document.getElementById("display").innerHTML == "0") {                
                numero = num;
                SetNumero(numero);
                document.getElementById("display").innerHTML = numero;
            }else if (document.getElementById("display").innerHTML.length <= 7 && document.getElementById("display").innerHTML != "0") {                
                numero = numero * 10 + num;
                SetNumero(numero);            
                document.getElementById("display").innerHTML = numero;
            }else if (document.getElementById("display").innerHTML.length >= 7) {                
                alert("El numero que intenta ingresar es: " + numero + " tiene mas de 8 caracteres");
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
                    Estate();
                    document.getElementById("display").innerHTML = resultado
            SetOperacion(num);

                }
            }
        }
    } 

})



/* 
var on= document.getElementById("on").addEventListener("click", Calculadora(2,2).sumar);
var sign = document.getElementById("sign").addEventListener("click", Calculadora(2,2).sumar);
var raiz = document.getElementById("raiz").addEventListener("click", Calculadora(2,2).sumar);
var dividido = document.getElementById("dividido").addEventListener("click", Calculadora(2,2).sumar);
var por = document.getElementById("por").addEventListener("click", Calculadora(2,2).sumar); */
var mas= document.getElementById("mas").addEventListener("click", Calculadora('+').operacion);/* 
var menos = document.getElementById("menos").addEventListener("click", Calculadora(2,2).sumar);
var punto = document.getElementById("punto").addEventListener("click", Calculadora(2,2).sumar);*/
var igual = document.getElementById("igual").addEventListener("click", Calculadora('=').operacion); 

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


