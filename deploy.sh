# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
yarn docs:build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

# 提交打包静态网站到 github-pages 分支
git init
git add .
git commit -m 'deploy'

# 部署到 https://<username>.github.io/<repo>
git push -f git@github.com:yangshuai0908/vitepress.git master:github-pages
