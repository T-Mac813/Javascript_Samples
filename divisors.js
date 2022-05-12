function divisors(integer) {
    var results = [];
    for(let i = 2; i < integer; i++){
        if(integer % i == 0){
            results.push(i);
        } 
    }
    if(results.length > 0){
        return results;
    } else {
        return(`${integer} is prime`);
    }
};

divisors(15);