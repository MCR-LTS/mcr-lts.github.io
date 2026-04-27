var posts=["d-de-v-code/","eve-1/","humanmade-rev/","mac-osu-otd/","mimi/","moectf2025-2/","tom-note/","unk-writeup-1/","moectf2025/","dc-bot/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };