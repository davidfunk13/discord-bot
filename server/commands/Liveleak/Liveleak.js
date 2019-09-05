import axios from 'axios';
import Cheerio from 'cheerio';



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

            // $('featured_items_outer')

            // const titleSelector = 'body > main > section.content_main_outer > div > div > div > div.col-sm-12.col-md-8.col-xs-12.pad_none.content_inner_page_left_outer > div.col-xs-12.pad_none.featured_item_main_outer';

            // $(titleSelector)
            //     .find('a')
            //     .each((index, element) => {
            //         if(element.attribs.title !== undefined && element.attribs.href !== undefined) {
            //             videos.push({title: element.attribs.title, url: element.attribs.href})
            //         }
            //     }).find('img').each((index, element) => {
            //         console.log(element)
            //     });

        }
    }).catch(err => res.json({ err: "Error occurred" }))
}

export default Liveleak;