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

 