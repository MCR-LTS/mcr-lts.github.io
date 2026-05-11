var posts=["corn/","dc-bot/","eve-1/","d-de-v-code/","mimi/","mac-osu-otd/","moectf2025-2/","protostar/","timu/","unk-writeup-1/","tom-note/","moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };