var posts=["eve-1/","eve-2/","mac-osu-otd/","mimi/","moectf2025/","unk-writeup-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };