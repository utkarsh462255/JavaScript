const accountId = 144553                    // Block Scope
let accountEmail = "utkarsh@google.com"     // Block Scope
var accountPassword = "12345"               // Global Scope
accountCity = "Muzaffarpur"                 // Bad way of initialization
let accountState;                           // It shows undefined

// accountId = 2                            // const does not allow to reassign variable


accountEmail = "hc@hc.com"                  // Reassign accountEmail
accountPassword = "21212121"                // Reassign accountPassword
accountCity = "Bengaluru"                   // Reassign accountCity

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])     // (console.table) shows the result in table formate.