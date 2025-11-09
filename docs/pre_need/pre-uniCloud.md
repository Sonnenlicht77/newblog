---
title: 📒 uniCloud 学习笔记
outline: deep
collapsed: true
---

# 📒 uniCloud 学习笔记
> [uniCloud 🔗 ](https://doc.dcloud.net.cn/uniCloud/) 


## uniCloud 概述
uniCloud 是 DCloud 联合阿里云、腾讯云、支付宝云，为开发者提供的基于 serverless 模式和 js 编程的云开发平台。开发时虽使用DCloud的工具，但应用上线时，客户端是直连阿里云或腾讯云的serverless，不经由DCloud的服务器。

uniCloud 的 web 控制台地址： https://unicloud.dcloud.net.cn
  
### uniCloud优点

   - uniCloud采用js编写后端服务代码，无需单独学习php或java，甚至也无需提前掌握nodejs。看下uniCloud的api文档即可。
   - uniCloud基于serverless，开发者无需了解linux、nginx，无需熟悉负载均衡、高并发处理，不用关心系统补丁和DDoS攻击，只需要用js写好云端业务代码，上传到uniCloud即可。
   - uniCloud推出了opendb，包含了大量的开源数据库模板，常见数据表无需自己设计。通过opendb模板，开发者可以快速掌握数据库设计。
   - SQL在过去也需要单独学习，尤其是复杂的联表查询、Tree查询，掌握很不容易。uniCloud推出了JQL（Javascript Query Language），会js即可掌握数据库查询，更对联表查询、Tree查询提供了非常简便的操作封装。
   - uniCloud提供了uni-id，无需自己开发账户体系，登录、注册、修改密码、角色权限体系、token管理一应俱全。
   - uniCloud在DB Schema中提供了与uni-id的角色权限体系配套的数据权限控制方案。这套方案让初学者也不会在权限控制中犯错。 在一目了然的权限配置清单中可以轻松发现漏做的事情，比以往在大坨php代码中分析是否存在权限漏洞要简单的多。 这套方案还能让多人协作、或项目二次开发变的更容易，因为规范的存在，新人可以轻易读懂老代码的权限体系逻辑。

### 开发效率提升，分8个层次：

   1. 提供众多现成轮子，不用自己写代码
   2. 如果没有现成轮子，那么用schema2code代码生成工具，生成数据库的增删改查页面（是直接生成页面，不是生成接口）
   3. 如果schema2code搞不定，需要手写代码，那么使用clientDB，将节省80%的服务端开发工作
   4. 如果仍然需要写云端代码，那么云对象让你的开发更简单
   5. HBuilderX在云端协同中提供工具助力
   6. 端和云的语言统一，提高了沟通效率、招聘效率
   7. 代码量减少到原来的十分之一，让code review效率和测试的效率也提升了十倍
   8. serverless让开发者专注于业务，无需分心运维

#### 第一层次提效：提供众多现成的轮子
   1. 官方维护的插件
      - uni-id 
      - uni-pay
      - uni-admin
      - ...
   2. 项目模板:云端一体的项目模板
      涉及两个概念：
      - `uni-module` ：云端一体组件最佳的承载方式。传统的`npm`无法处理云端一体的需求，把前端和云端的代码，一起打包到一个`uni_module`中，整体传播与发布，对云端一体组件的生态有重大的帮助。
      -  `datacom` ：datacom是一种在前端绑定后端数据源的组件。
#### 第二层提效：schema2code自动生成代码

找不到现成的轮子，需要自己写代码时。那么首先要做的，是使用 `schema2code`([🔗](https://doc.dcloud.net.cn/uniCloud/schema2code.html)) 这个神器，自动生成代码。    
uniCloud云数据的schema，是一项重要的创新。 为数据表编写schema，可以实现非常多功能：数据结构定义、权限管理、数据值域管理

在传统开发中，有了数据库，可以生成crud后台接口。然后前端再写代码调用接口。

但在uni云端一体生态中，有了数据库的schema，可以直接生成云端一体的页面。而不仅仅是只生成接口。

schema2code，可以生成手机端的列表、详情或增删改页面，也可以生成admin管理端的所有数据管理功能的页面。

schema2code生成的代码清晰易读，易于二次开发。这比低代码平台更有效率、且完全开放开源，随意扩展。

#### 第三层提效：clientDB，让服务器代码减少80%

如果schema2code仍不能满足你的需求，需要单独开发，那么只要操作数据库，clientDB就是推荐使用的利器。

clientDB是uniCloud提供的一个数据库操作库，它的作用是在前端直接操作数据库，而无需通过后端接口。

- clientDB技术，有前端的 `JS API` 和前端组件 `<unicloud-db>`。
- `JQL` 是 clientDB 提供的一种基于JS的数据库操作语言，它的语法与 SQL 类似，但更简单、更方便。

clientDB的使用场景包括：
   - 手机端的列表、详情或增删改页面
   - admin管理端的所有数据管理功能的页面

#### 第四层提效：云对象，改变前后端协同

如果clientDB仍然不能满足需求，必须编写云端代码，那么**云对象**的出现，彻底改变了后端开发json接口和前端联调的低效局面。

云对象把云端的代码变成对象方式，让前端js直接import这个对象，然后使用这个对象的方法，就像使用前端的js对象一样顺畅。

#### 第五层提效：HBuilderX，云端协同工具

#### 第六层提效：端和云的语言统一，提高了沟通效率、招聘效率

前端和云端都使用js编程语言，提高了沟通效率。


#### 第七层提效：测试效率的提升

#### 第八层提效：serverless，让开发者专注于业务，无需分心运维
因为serverless的免运维特点，开发商再也不用操心扩容、高并发、ddos攻击、安全漏洞补丁等一系列麻烦事。只需专注于自己的业务。


## 快速上手 uniCloud

### 1. uniCloud项目初始化

uniCloud项目初始化，需要在HBuilderX中创建一个uniCloud项目。

- 1. 创建uniCloud项目的步骤如下：
   - 打开HBuilderX，点击“文件”->“新建”->“项目”。
   - 在“新建项目”对话框中，选择“uniCloud”项目类型，选择**支付宝/阿里云**作为云服务供应商。
   - 输入项目名称，选择项目路径，点击“创建”。

   创建完成后，uniCloud项目就会出现在HBuilderX的项目列表中。
- 2. uniCloud项目目录结构
   uniCloud项目的目录结构如下：

```bash:line-numbers{14-19}
unicloud-test  # uniCloud项目名称
├─ App.vue  # 项目入口文件
├─ index.html # 项目首页 
├─ uni.scss  # 全局样式文件
├─ main.js  # 项目入口js文件
├─ uni.promisify.adaptor.js  # 用于将uniCloud的异步函数转换为Promise的适配器
├─ manifest.json # 项目配置文件
├─ pages.json # 页面配置文件
├─ pages # 页面目录
│  └─ index
│     └─ index.vue
├─ static  # 静态资源目录
│  └─ logo.png
├─ uniCloud # 支付宝云函数目录: 未关联云服务空间
│  ├─ cloudfunctions # 支付宝云函数目录
│  │  └─ common # 支付宝云函数公共目录
│  │     └─ uni-id-common # uni-id-common模块目录
│  └─ database # 支付宝数据库目录
│     └─ JQL查询.jql # 支付宝数据库JQL查询文件
└─ uni_modules # uniCloud模块目录
   ├─ uni-id-common # uni-id-common模块目录
   │  ├─ changelog.md # uni-id-common模块的更新日志文件
   │  ├─ readme.md # uni-id-common模块的说明文档文件
   │  ├─ package.json # uni-id-common模块的依赖配置文件
   │  └─ uniCloud # uni-id-common模块的uniCloud目录
   │     └─ cloudfunctions # 支付宝云函数目录
   │        └─ common # 支付宝云函数公共目录
   │           └─ uni-id-common # uni-id-common模块目录
   │              ├─ index.js 
   │              └─ package.json
   └─ uni-config-center # uni-config-center 模块目录
      ├─ changelog.md
      ├─ readme.md
      ├─ package.json
      └─ uniCloud # uni-config-center模块的uniCloud目录
         └─ cloudfunctions # 支付宝云函数目录
            └─ common # 支付宝云函数公共目录
               └─ uni-config-center # uni-config-center模块目录
                  ├─ index.js
                  └─ package.json

```   

- 3. uniCloud项目关联云服务空间
   - 首页，准备好云服务空间，uniCloud 提供了支付宝/阿里云的免费一个月云服务空间。[uniCloud 云服务空间🔗](https://unicloud.dcloud.net.cn/)
   - uniCloud项目关联云服务空间,在项目目录中，找到“uniCloud”->“关联云服务空间”。
   - 在“关联云服务空间”对话框中，找到和项目名称相同的云服务空间，点击“关联”。
   - 关联成功后，目录中uniCloud后面的显示 "支付宝云: 云服务空间的名称"。

![未绑定云服务空间](../public/images/截屏2025-11-09%2013.34.52.png)
![关联云服务空间](../public/images/截屏2025-11-09%2013.35.38.png)
![关联成功](../public/images/截屏2025-11-09%2013.42.05.png)
