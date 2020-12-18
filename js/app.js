/*Desarrolla la funcionalidad de la calculadora utilizando el patrón módulo, es decir que todo el código debe estar englobado en un objeto llamado Calculadora. Utiliza un método de inicialización que se encargue de ejecutar todas las otras funciones que se deben iniciar con la ejecución del programa.
3Crea los métodos que consideres necesarios para hacer que la tecla presionada reduzca su tamaño y vuelva a su forma original al soltarla.
4Para efectos de este proyecto sólo realizaremos las 4 operaciones básicas: suma, resta, multiplicación y división. El botón que indica raíz cuadrada sólo hace parte del diseño general de la calculadora y no es necesario que lo implementes.*/

//Calculadora(1,2).sumar()

var Calculadora = (function (num1,num2){
    var resultado = 0
    function ActualizaResultado(res){
        resultado = res;
        console.log(res)
    }
    return{
        sumar:function(){
            var res = num1 + num2
            ActualizaResultado(res)
        }
    }


})