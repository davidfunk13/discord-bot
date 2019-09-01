import parseArgs from 'minimist';
import Liveleak from '../commands/Liveleak/Liveleak';
const parseInput = (arr)=>{
    //parsing and dissasembling query string, reassigning commands var to new object with args and flags kets. 
    arr.shift();
    let commands = parseArgs(arr, {boolean: true});
    let args = commands._;
    let flags = Object.assign({}, commands);
    delete flags._;
    commands = {args: args, flags: flags};
    
    switch (commands.args[0].toLowerCase()) {
        case 'liveleak':
            console.log(Liveleak());
            break;
        default:
            break;
    }

}

export default parseInput;