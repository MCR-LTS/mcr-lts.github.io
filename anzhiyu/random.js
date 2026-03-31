var posts=["d-de-v-code/","eve-1/","mac-osu-otd/","moectf2025-2/","mimi/","unk-writeup-1/","moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };