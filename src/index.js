module.exports = function toReadable(number) {

    if (number === 0) return 'zero';

    let result = '';
    const base = [['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',],
    ['ten', 'eleven', 'twelve', 'thirteen', '', 'fifteen', '', '', 'eighteen',],
    ['', '', 'twenty', 'thirty', 'forty', 'fifty', '', '', 'eighty']];
    const data = number.toString().split('').reverse();

    // первый десяток
    if (data[1] === '1') {
        result = (+data[0] <= 3 || data[0] === '8' || data[0] === '5') ? base[1][data[0]] : base[0][data[0]] + 'teen';
    }
    else {
        //единицы
        result = base[0][+data[0]];

        //остальные десятки
        if (+data[1] > 1) {
            result = ((+data[1] <= 5 || data[1] === '8') ? base[2][+data[1]] : base[0][+data[1]] + 'ty') + ((result.length > 0) ? ' ' + result : '');
        }
    }
    //сотни
    if (data[2]) {
        result = base[0][+data[2]] + ' hundred' + ((result.length > 0) ? ' ' + result : '');
    }

    return result;
}
