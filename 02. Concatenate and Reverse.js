function solve(input) {

    let allStrings = input.join('');
    let chars = Array.from(allStrings);
    let revChars = chars.reverse();

    console.log(revChars.join(''));
}

solve(['I', 'am', 'student']);
