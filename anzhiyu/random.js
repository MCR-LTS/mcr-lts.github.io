var posts=["eve-1/","mac-osu-otd/","d-de-v-code/","dc-bot/","mimi/","moectf2025-2/","unk-writeup-1/","moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };