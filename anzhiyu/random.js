var posts=["corn/","dc-bot/","eve-1/","mac-osu-otd/","mimi/","syspmt/","moectf2025-2/","protostar/","timu/","unk-writeup-1/","d-de-v-code/","moectf2025/","tom-note/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };