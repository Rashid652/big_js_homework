let l = +prompt('Введите кол-во примеров!');

for(let i = 0; i < l; i++) {
    let num1 = Math.floor( Math.random() * 100 * Math.random())
    let num2 = Math.floor( Math.random() * 100 * Math.random())
    let randSym = Math.floor(Math.random() * 6);
    console.log(randSym);
    if (randSym == 0) {
        let primer = +prompt(num1 + ' + ' + num2 + ' = ');
        if (primer == (num1 + num2)) {
            let answer = alert('Ваш ответ верный - ' +primer);
        } else {
            let answer = alert('Ваш ответ не верный - ' + primer + ' ! ' + 'Правильный ответ - ' + (num1 + num2));
        }
    } else if (randSym == 1) {
        let primer = +prompt(num1 + ' - ' + num2 + ' = ');
        if (primer == (num1 - num2)) {
            let answer = alert('Ваш ответ верный - ' +primer);
        } else {
            let answer = alert('Ваш ответ не верный - ' + primer + ' ! ' + 'Правильный ответ - ' + (num1 - num2));
        }
    } else if (randSym == 2) {
        let primer = +prompt(num1 + ' * ' + num2 + ' = ');
        if (primer == (num1 * num2)) {
            let answer = alert('Ваш ответ верный - ' +primer);
        } else {
            let answer = alert('Ваш ответ не верный - ' + primer + ' ! ' + 'Правильный ответ - ' + (num1 * num2));
        }
    } else if (randSym == 3) {
        let primer = +prompt(num1 + ' / ' + num2 + ' = ');
        if (primer == (num1 / num2)) {
            let answer = alert('Ваш ответ верный - ' +primer);
        } else {
            let answer = alert('Ваш ответ не верный - ' + primer + ' ! ' + 'Правильный ответ - ' + (num1 / num2));
        }
    } else if (randSym == 4) {
        let primer = +prompt(num1 + ' % ' + num2 + ' = ');
        if (primer == (num1 % num2)) {
            let answer = alert('Ваш ответ верный - ' +primer);
        } else {
            let answer = alert('Ваш ответ не верный - ' + primer + ' ! ' + 'Правильный ответ - ' + (num1 % num2));
        }
    } else if (randSym == 5) {
        let primer = +prompt(num1 + ' ** ' + num2 + ' = ');
        if (primer == (num1 ** num2)) {
            let answer = alert('Ваш ответ верный - ' +primer);
        } else {
            let answer = alert('Ваш ответ не верный - ' + primer + ' ! ' + 'Правильный ответ - ' + (num1 ** num2));
        }
    }    
}