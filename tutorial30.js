//Scope chain & Lexical Scope

//Global Variable
let globalVariable="I am Global variable"

function outerFunction(){
    //localVariable

    let outerFunctionVariable="I am outer function variable"

    function innerFunction(){
        //localVariable
        let innerFunctionVariable="I am inner function variable"
        console.log(innerFunctionVariable)
        console.log(outerFunctionVariable)
        console.log(globalVariable)
        //console.log(x)

    }
    innerFunction()

}

outerFunction()