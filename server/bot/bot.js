import {parseInput} from './';
const Bot = {
    respond: (terms, message, options) =>{
       return parseInput(terms, message, options);
    },
}

export default Bot;