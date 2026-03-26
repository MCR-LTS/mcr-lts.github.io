var posts=["eve-2/","eve-1/","d-de-v-code/","mimi/","mac-osu-otd/","moectf2025-2/","unk-writeup-1/","moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };