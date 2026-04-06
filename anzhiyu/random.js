var posts=["eve-1/","d-de-v-code/","mac-osu-otd/","moectf2025-2/","mimi/","unk-writeup-1/","dc-bot/","moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };