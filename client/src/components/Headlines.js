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

(async () => {
  let feed = await parser.parseURL(CORS_PROXY + 'http://www.tmz.com/rss');
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title + ':' + item.link);
    story1 = feed.items[0].title;
    story2 = feed.items[1].title;
    story3 = feed.items[2].title;
    story4 = feed.items[3].title;
    story5 = feed.items[4].title;
  });
  console.log('story: ', story5);
})();

export default function Headlines(speed = 0.04, direction = 'left') {
  return (
    <div
      style={{
        width: '1200px',
        whiteSpace: 'nowrap',
        color: 'white',
      }}
    >
      <Marquee>
        {story1}
        {story2}
        {story3}
        {story4}
        {story5}
      </Marquee>
    </div>
  );
}
