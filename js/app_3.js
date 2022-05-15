let userName = prompt('Введите свое имя!');
let userBirth = +prompt('Введите год своего рождения!');
let ageNow = +prompt('Введите нынешний год!');
function Age() {
    alert('Имя ' + userName + ' год рождения ' + userBirth + ' нынешний год ' + ageNow);
    alert(userName + ' Ваш возраст ' + (ageNow - userBirth));
}
Age();