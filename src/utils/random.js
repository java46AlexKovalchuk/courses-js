
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    //TODO return a random number in the range [min, max]
}
export function getRandomElement(array) {
    return array [Math.floor(Math.random() * array.length)];
    //TODO return a random element of array
}
export function getRandomDate(minYear, maxYear) {
    let year = getRandomNumber(minYear, maxYear);
    let month = getRandomNumber(0, 11);
    let day = getRandomNumber(1, 31);
    let date = new Date(year, month, day);
    let dateSimple = date.toDateString();
    return dateSimple;
    //TODO return random Date object (see constructor of the standard class Date)
    //const date = new Date(year, month, day)
}


