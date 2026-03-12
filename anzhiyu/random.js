var posts=["2026/02/13/moectf2025/","2024/12/23/mimi/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };