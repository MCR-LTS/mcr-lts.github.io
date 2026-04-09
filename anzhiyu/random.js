var posts=["eve-1/","mac-osu-otd/","moectf2025-2/","unk-writeup-1/","dc-bot/","mimi/","d-de-v-code/","moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };