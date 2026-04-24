var posts=["d-de-v-code/","dc-bot/","humanmade-rev/","eve-1/","mac-osu-otd/","mimi/","moectf2025-2/","tom-note/","moectf2025/","unk-writeup-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };