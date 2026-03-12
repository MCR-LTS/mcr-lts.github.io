var posts=["2026/03/12/eve-1/","2024/12/23/mimi/","2026/02/13/moectf2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };