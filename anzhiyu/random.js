var posts=["d-de-v-code/","corn/","dc-bot/","eve-1/","mac-osu-otd/","mimi/","protostar/","moectf2025-2/","unk-writeup-1/","timu/","tom-note/","moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };