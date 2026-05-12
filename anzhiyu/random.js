var posts=["corn/","d-de-v-code/","dc-bot/","eve-1/","mac-osu-otd/","mimi/","moectf2025/","syspmt/","timu/","moectf2025-2/","protostar/","unk-writeup-1/","tom-note/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };