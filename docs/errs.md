---
title: 遇到的问题
---

## 创建角色用户时遇到的问题

### 创建好普通管理员角色用户后，登录后提示没有权限

- Error: 权限校验未通过，未能获取当前用户信息，当前用户为匿名身份，
- Error: 权限校验未通过，参与权限校验的集合：[uni-id-users,uni-id-roles]
- Error: 权限校验未通过，参与权限校验的集合：[uni-stat-result,opendb-app-list]
![创建好角色用户后，登录后提示没有权限](./public/images/截屏2025-11-06%2012.43.29.png)

## uni-cms

### 安装插件 测试

```text
14:28:58.963 [本地调试][clientDB请求]表名：uni-cms-categories
14:28:59.157 [本地调试]FaasError: not found collection
14:28:59.157 [本地调试]    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
```
