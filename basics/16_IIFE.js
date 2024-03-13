// IIFE:- Immediately Invoked Function Expressions (IIFE)


(function javascript(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('utkarsh')
