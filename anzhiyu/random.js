var posts=["corn/","dc-bot/","d-de-v-code/","eve-1/","mac-osu-otd/","mimi/","protostar/","timu/","moectf2025-2/","unk-writeup-1/","moectf2025/","tom-note/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };