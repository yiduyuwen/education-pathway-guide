# 升学路线图｜开放教育知识库与实用工具

**目标：** 面向所有人的免费教育路径知识库，帮助读者比较升学、留学、学历提升与终身学习路线。

## 目录

- `index.html`：首页、知识库分类与搜索
- `pages/`：8 个教育阶段指南初稿
- `tools/index.html`：工具入口
- `tools/planner.html`：升学路线规划器
- `tools/budget.html`：教育预算计算器
- `tools/checklist.html`：申请清单与打印/PDF
- `sources.html`：官方资料入口
- `POLICY-VERIFICATION.md`：政策核验流程
- `data/policy-verification-template.csv`：核验台账模板
- `CONTRIBUTING.md`：贡献指南
- `LICENSE`：代码 MIT 许可
- `CONTENT-LICENSE.md`：原创内容建议许可
- `.nojekyll`：让 GitHub Pages 按静态文件发布

## 本地预览

解压后双击 `index.html`。网站使用原生 HTML、CSS 和 JavaScript，无需安装依赖、数据库或服务器。建议用 Chrome 或 Edge 测试各页面和工具。

## 发布到 GitHub Pages（免费静态托管）

1. 登录 GitHub，创建一个 **Public** 仓库，例如 `education-pathway-guide`。
2. 将 ZIP 解压后的**全部文件和文件夹**上传到仓库根目录，确认 `index.html` 在仓库根目录。
3. 打开仓库 `Settings → Pages`。
4. 在 Build and deployment 选择 `Deploy from a branch`，分支选 `main`，目录选 `/(root)`，保存。
5. 等待部署完成后，在 Pages 设置页点击 `Visit site`。项目网站地址通常为 `https://你的用户名.github.io/仓库名/`；以 GitHub 页面实际显示的 URL 为准。
6. 修改文件后提交到 `main`，GitHub Pages 会重新部署。首次发布或更新可能需要等待一段时间。

官方说明：
- 创建网站：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- GitHub Pages 快速入门：https://docs.github.com/en/pages/quickstart

## 建议上线前检查

- [ ] 解压后在本地打开 `index.html`
- [ ] 搜索、预算计算、路线规划和清单工具可操作
- [ ] 手机与电脑布局正常
- [ ] 所有内部链接均可打开
- [ ] 没有提交密码、个人证件、申请人隐私信息或 API 密钥
- [ ] 所有正式政策结论已完成来源核验
- [ ] README、许可和贡献方式与项目实际情况一致

## 内容与政策质量

页面目前是**知识结构和写作初稿**，不是已完成官方核验的政策数据库。关键结论需要记录适用地区、适用年份、来源链接、页面条款、发布日期/生效日期和核验日期。请使用 `POLICY-VERIFICATION.md` 和 CSV 台账。

本网站是独立教育信息项目，不隶属于教育主管部门、学校或招生机构；工具结果不构成录取承诺、法律意见或留学中介服务。

## 许可

- 网站代码采用 MIT License。
- 原创文章建议采用 CC BY-SA 4.0；请阅读 `CONTENT-LICENSE.md`。第三方材料不自动纳入该许可。
