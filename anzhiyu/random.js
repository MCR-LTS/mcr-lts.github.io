var posts=["dc-bot/","d-de-v-code/","eve-1/","mac-osu-otd/","mimi/","moectf2025-2/","humanmade-rev/","moectf2025/","unk-writeup-1/","tom-note/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };