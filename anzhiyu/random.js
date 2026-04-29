var posts=["corn/","d-de-v-code/","dc-bot/","eve-1/","mimi/","mac-osu-otd/","protostar/","moectf2025-2/","timu/","tom-note/","unk-writeup-1/","moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };