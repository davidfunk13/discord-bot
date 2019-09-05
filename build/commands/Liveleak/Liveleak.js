"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Liveleak = function Liveleak(params, message) {
  var query = '';

  if (!params.length) {
    return message.reply('You didnt search for anything! OooOOOOOOOh!');
  }

  params.forEach(function (element, index) {
    if (index > 0) {
      return query += '+' + element;
    }

    return query += element;
  });

  var req = _axios["default"].get("https://www.liveleak.com/browse?q=".concat(query, "&a=list&submit=Submit"));

  req.then(function (res) {
    if (res.status === 200) {
      var videos = [];
      var html = res.data;

      var $ = _cheerio["default"].load(html); // $('featured_items_outer')
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
  })["catch"](function (err) {
    return res.json({
      err: "Error occurred"
    });
  });
};

var _default = Liveleak;
exports["default"] = _default;