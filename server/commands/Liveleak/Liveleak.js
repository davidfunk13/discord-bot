import axios from 'axios';
import Cheerio from 'cheerio';
import {DIV_SELECTOR, IMG_SELECTOR, H3_SELECTOR} from './selectors';


const Liveleak = (params, message) => {
    let query = '';

    if (!params.length) {
        return message.reply('You didnt search for anything! OooOOOOOOOh!');
    }

    params.forEach((element, index) => {
        if (index > 0) {
            return query += '+' + element;
        }
        return query += element
    });

    const req = axios.get(`https://www.liveleak.com/browse?q=${query}&a=list&submit=Submit`);
    req.then(res => {
        if (res.status === 200) {
            const videos = [];
            const html = res.data;
            const $ = Cheerio.load(html);

        const titles = $('h3').children('a').toArray();
        titles.map(item=> console.log({title: item.attribs.title, url:item.attribs.href}))

        }

    }).catch(err => res.json({ err: "Error occurred" }))
}

export default Liveleak;