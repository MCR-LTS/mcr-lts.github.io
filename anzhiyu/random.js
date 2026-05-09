var posts=["corn/","dc-bot/","eve-1/","mac-osu-otd/","d-de-v-code/","mimi/","moectf2025-2/","moectf2025/","timu/","unk-writeup-1/","protostar/","tom-note/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };