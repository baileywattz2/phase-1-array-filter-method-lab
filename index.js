//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//findMatching will use callback: drivers.filter
 //for every driver we want to compare it to the
 //povided string to see if equal. 
 //.lowecase provided for case sensitivity

function findMatching(drivers, string){
  return drivers.filter(driver => 
        driver.toLowerCase() === string.toLowerCase()
    )
}

// fuzzyMatch takes the drivers array and a string as argument
//were checking for every driver that has matching first letters
//we do not want a string returned if there is no matches 


function fuzzyMatch(drivers, string){
    return drivers.filter(driver =>
        driver[0] === string[0]
    )
}

//matchName takes an array of objects and a string as an argument
//it takes the drivers.filter callback function
// to find the first names that match each other 


function matchName(drivers, string){
    return drivers.filter(driver =>
        driver.name === string
    )
}
