var posts=["dc-bot/","eve-1/","mac-osu-otd/","d-de-v-code/","moectf2025-2/","unk-writeup-1/","mimi/","moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };