var posts=["2026/03/16/eve-2/","2026/03/15/mac-osu-otd/","2026/02/13/moectf2025/","2026/03/12/eve-1/","2024/12/23/mimi/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };