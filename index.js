const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching (arr, name) {
    return(arr.filter(function(string) {
        if(name.toLowerCase() === string.toLowerCase()) {
            return string
        }
    }))
}

function fuzzyMatch (arr, char) {
    return arr.filter(function(string) {
        if(string[0, 1] === char[0, 1]){
            return string
        }
    })
}
   
function matchName(drivers, name) {
    return drivers.filter(function(driver){
        return driver.name === name
    }) 
    
}

matchName(drivers, 'Bobby')


