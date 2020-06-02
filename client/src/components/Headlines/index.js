import React from 'react';
import Marquee from 'react-double-marquee';
import Parser from 'rss-parser';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

let parser = new Parser();

let story1 = '';
let story2 = '';
let story3 = '';
let story4 = '';
let story5 = '';
let newStory;
let divider = ` .   .   . `;

(async () => {
  let feed = await parser.parseURL(CORS_PROXY + 'http://www.tmz.com/rss');
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title + ':' + item.link);
    story1 = feed.items[0].title.toUpperCase();
    story2 = feed.items[1].title.toUpperCase();
    story3 = feed.items[2].title.toUpperCase();
    story4 = feed.items[3].title.toUpperCase();
    story5 = feed.items[4].title.toUpperCase();
  });
  newStory = story1 + divider + story2 + divider + story3 + divider + story4 + divider + story5;
  console.log('newstory: ', newStory);
})();

export default function Headlines() {




  return (
    <div
      style={{
        width: '1050px',
        whiteSpace: 'nowrap',
        color: 'white',
        fontSize: '1.15em'
      }}
    >
      <Marquee
        direction={'left'}
      >
        {newStory}

      </Marquee>
    </div>
  );
}
