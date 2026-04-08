var posts=["d-de-v-code/","mac-osu-otd/","dc-bot/","eve-1/","mimi/","moectf2025-2/","moectf2025/","unk-writeup-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };