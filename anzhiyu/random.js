var posts=["2025/06/14/在中国使用giffgaff电话卡/","2025/05/02/经典诵读舞台脚本/","2025/05/02/什么是CDN加速？/","2025/05/02/什么是顶级域名、二级域名，子域名？/","2025/05/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };