import axios from 'axios';
import Cheerio from 'cheerio';
import {ITEM_DIV} from './selectors';


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

            const items = $(ITEM_DIV);

            items.each(function(){
                //this is each video block
                console.log(items.html())
            })
        }

    }).catch(err => res.json({ err: "Error occurred" }))
}

export default Liveleak;

// <a href="https://www.liveleak.com/view?t=20b_1459220684">
//     <div class="col-sm-3 col-md-3 col-xs-5 pad_none featured_items_pic">
//         <img src="https://ne1.wac.edgecastcdn.net/80281E/ll_as_u1/thumbs/2016/Mar/28/87105cc76c56_thumb_1.jpg" alt="When an Arab Prince decides to bring his big toy to a wedding in the desert  " id="thumbnail_20b_1459220684"><div class="pg_text">GA</div>
//         </div>
// </a>
//     <div class="col-sm-9 col-md-9 col-xs-7 pad_none featured_items_right" style="height: 100px; overflow:hidden;">
//         <h3>
//             <span name="rate_thing_container[20b_1459220684]" class="hidden-xs">
//                 <samp class="arrow_top"><i class="fa fa-angle-up rate_thing uprate" aria-hidden="true"></i></samp>
//                 <samp class="text_center_con thing_score">2</samp>
//                 <samp class="arrow_bottom"><i class="fa fa-angle-down rate_thing downrate" aria-hidden="true"></i></samp>
//             </span>
//             <a href="https://www.liveleak.com/view?t=20b_1459220684" title="When an Arab Prince decides to bring his big toy to a wedding in the desert  ">
//                 When an Arab Prince decides to bring his bi..</a></h3> <p>A United Arab prince decides to come to a wedding in &quot;Ras al-Khai..</p>
//         <div class="col-xs-12 pad_none featured_text_con">By: <a href="https://www.liveleak.com/c/John_Smith_AlMalek">John Smith AlMalek</a> (892.50) | Leaked: Mar-28-2016 in: <a href="https://www.liveleak.com/c/John_Smith_AlMalek">John Smith AlMalek</a> | Comments: 38 | Views: 5999 |
// Location: United Arab Emirates</div>
//     </div>