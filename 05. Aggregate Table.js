function solve(input) {
    let towns =[];
    let sum = 0;

    for(let arg of input){
        let townData = arg.split('|');
        let townName = townData[1].trim();
        let income = townData[2].trim();
        sum+=Number(income);
        towns.push(townName);
    }

    console.log(towns.join(', '));
    console.log(sum);
}

solve(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']);
