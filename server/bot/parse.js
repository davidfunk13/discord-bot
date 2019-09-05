import parseArgs from 'minimist';
import Liveleak from '../commands/Liveleak/Liveleak';
const parseInput = (arr, message)=>{
    //parsing and dissasembling query string, reassigning commands var to new object with args and flags kets. 
    arr.shift();
    let commands = parseArgs(arr, {boolean: true})._;
    let flags = Object.assign({}, parseArgs(arr, {boolean: true}));
    delete flags._;

    switch (commands[0].toLowerCase()) {
        case 'liveleak':
            const params = commands.splice(1);
            Liveleak(params, message);
            break;
        default:
            break;
    }

}

export default parseInput;