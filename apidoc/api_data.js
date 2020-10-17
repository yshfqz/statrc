define({ "api": [
  {
    "type": "post",
    "url": "/file/upload",
    "title": "上传图片",
    "group": "file",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hehe",
            "description": "<p>上传图片的name值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '上传成功'，\n   imgurl: '/static/imgs/hehe-16500003424-4325.png'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "file",
    "name": "PostFileUpload"
  },
  {
    "type": "post",
    "url": "/food/add",
    "title": "添加菜品",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>菜品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>菜品价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>菜品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>菜品类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>菜品图片</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '添加成功'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "food",
    "name": "PostFoodAdd"
  },
  {
    "type": "post",
    "url": "/food/del",
    "title": "删除菜品",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>菜品id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '删除成功'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "food",
    "name": "PostFoodDel"
  },
  {
    "type": "post",
    "url": "/food/getPage",
    "title": "分页查询",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>每页数据条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>第几页</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '查询成功',\n   info: {list:[...],count:数据总条数,pages:数据总页数}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "food",
    "name": "PostFoodGetpage"
  },
  {
    "type": "post",
    "url": "/food/getType",
    "title": "分类查询",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>菜品类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '查询成功',\n   list: [{...},{...}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "food",
    "name": "PostFoodGettype"
  },
  {
    "type": "post",
    "url": "/food/keyword",
    "title": "关键字查询",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>查询关键字</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '查询成功',\n   list: [{...},{...}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "food",
    "name": "PostFoodKeyword"
  },
  {
    "type": "post",
    "url": "/food/update",
    "title": "修改菜品",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>菜品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>菜品价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>菜品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>菜品类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>菜品图片</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '修改成功'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "food",
    "name": "PostFoodUpdate"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>账号密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: -1,\n   msg: '参数不能为空'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user",
    "name": "PostUserLogin"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "用户注册",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>账号密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: -1,\n   msg: '参数不能为空'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user",
    "name": "PostUserRegister"
  },
  {
    "type": "post",
    "url": "/user/sendMail",
    "title": "发送邮箱验证码",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: -1,\n   msg: '参数不能为空'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user",
    "name": "PostUserSendmail"
  }
] });
