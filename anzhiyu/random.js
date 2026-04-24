var posts=["dc-bot/","d-de-v-code/","eve-1/","humanmade-rev/","mac-osu-otd/","mimi/","tom-note/","unk-writeup-1/","moectf2025/","moectf2025-2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };