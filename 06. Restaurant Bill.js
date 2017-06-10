function solve(input) {
    let orders = [];
    let sum = 0;

    for(let i = 0; i < input.length; i++){
        if(i % 2 == 0 ){
            orders.push(input[i]);
        }else {
            sum += Number(input[i]);
        }
    }

    console.log(`You purchased ${orders.join(', ')} for a total sum of ${sum}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);