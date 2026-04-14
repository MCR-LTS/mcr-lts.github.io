var posts=["d-de-v-code/","dc-bot/","eve-1/","mac-osu-otd/","mimi/","moectf2025-2/","moectf2025/","tom-note/","unk-writeup-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };