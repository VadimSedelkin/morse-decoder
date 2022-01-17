const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const lenLetterCode = 10;
const lenSymbolCode = 2;
function decode(expr) {
    let len = expr.length;
    let array = [];
    let letter = "";
    for(let i = 0; i < len; i+=lenLetterCode){
        letter = "";
        for(let j = 0; j < lenLetterCode; j++){
            letter+=expr[i+j]
        }
        array.push(parseInt(letter) || 0);
    }
    array = array.map(item => {
        let letter = ""
        if(item === 0){
            letter = " ";
            return letter;
        } 
        item = item.toString();
        for(let i = 0; i < item.length-1; i+=lenSymbolCode){
            if(item[i] === "1" && item[i+1] === "0")
                letter += ".";
            else if(item[i] === "1" && item[i+1] === "1")
                letter += "-";
        }

        return MORSE_TABLE[letter];
    });
    return array.join('');
}

module.exports = {
    decode
}