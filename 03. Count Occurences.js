function solve(target, text) {
    let counter = 0;
    let index = text.indexOf(target);

    while (index !== -1){
        counter++;
        index++;
        index = text.indexOf(target, index);
    }

    console.log(counter);
}

solve('the', 'the quick brown fox jumps over the lay dog.');