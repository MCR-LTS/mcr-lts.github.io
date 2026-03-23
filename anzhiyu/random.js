var posts=["eve-1/","eve-2/","mac-osu-otd/","unk-writeup-1/","moectf2025/","mimi/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };