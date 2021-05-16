module.exports = {
  "title": "海边看日落",
  "base":"/blog",
  "description": "一个记录我日常学习与分享的个人博客",
  "dest": "public/blog",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "最新发布",
        "icon": "reco-message",
        "items": [
          {
            "text": "第一篇文章？",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "619956910",
            //"link": "https://github.com/recoluan",
            "link": "",
            "icon": "reco-qq"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "南上康青山",
        "desc": "一个吊炸天的前端大牛，接诉即办前端负责人，前端架构师，敢和韩总监正面硬刚的汉子！",
        "email": "1156743527@qq.com",
        "link": "https://www.qiyoe.cn"
      },
    ],
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "ZhangGang",
    "authorAvatar": "/zg.jpg",
    "record": "京ICP备2021014403号-2",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}
