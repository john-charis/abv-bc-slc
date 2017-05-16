'use strict'

module.exports.getPrimes = function(n){

    let primes = [];
    if(isNaN(n)){
        return "Invalid number";
    }
    else if(n < 2){
        return [];
    }
    else{
        for(let i =2; i<(n+1); i++){
            if(isPrime(i)){
                primes.push(i);
            }
        }
    }
    return primes;

    function isPrime(num){
        let check = [];
        for(let j = 2; j < num; j++){
            if( num% j==0){
                check.push(j);
            }
        }
        if(check.length > 0){
            return false;
        }
        else{
            return true;
        }
    }
}

