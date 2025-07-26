// custom.js — 自定义 JS 加载脚本
console.log('自定义 JS 加载完成');

// 插入第一个统计脚本
(function() {
  const script = document.createElement('script');
  script.src = 'https://umami.orsrv.nyc.mn';
  script.defer = true;
  script.dataset.websiteId = '94c51935-53f9-47ef-a1ce-cdee4de592f9';
  document.body.appendChild(script);
})();
