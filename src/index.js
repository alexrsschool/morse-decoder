const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let decodeWord = '';
    let strTmp = ' ';
    let arrTmp = [];

    let j = 0, next = 10;
    for (let i = 0; i < expr.length; i = i + 10) {
        strTmp = expr.substr(i, 10);
        strTmp = strTmp.replace(/10/g, ".");
        strTmp = strTmp.replace(/11/g, "-");
        strTmp = strTmp.replace(/00/g, "");
        strTmp = strTmp.replace(/\*{10}/g, ' ');
        arrTmp.push(strTmp);
        if (arrTmp[j] === ' ') decodeWord += ' ';
        else {
            decodeWord += MORSE_TABLE[arrTmp[j]];
        }
        j++;
        next += 10;

    }

    return decodeWord;

}

module.exports = {
    decode
};