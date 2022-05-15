const options = {
    steps: +prompt('Введите кол-во!'), 
    identSymbol: prompt('Введите символ отступа!'), 
    endSymbol: prompt('Введите конечный символ!') 
};

const printStairs = ({ steps, identSymbol, endSymbol }) => {
    for (let i = 0; i < steps; i++) {
        const stroke = `${identSymbol.repeat(i)}${endSymbol}`;
        console.log(stroke);
    }
};

printStairs(options);