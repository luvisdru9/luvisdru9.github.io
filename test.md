当前修改位于 `feature/minimal-light-homepage` 分支。建议先保存到该分支，再合并到 `main` 发布主页。

### 1. 保存并推送当前修改

```powershell
cd C:\Users\luvis\homepage

git add .
git status --short
git commit -m "Update homepage content and honors section"
git push origin feature/minimal-light-homepage
```

`.gitignore` 已排除两个不应提交的原始视频，约 42 MB 的 `RLMMFlow-web.mp4` 会正常提交。

### 2. 合并到 main，更新线上主页

当前 `main` 落后于功能分支，可以直接快进合并：

```powershell
git switch main
git pull --ff-only origin main
git merge --ff-only feature/minimal-light-homepage
git push origin main
```

推送后等待约 1–5 分钟，然后访问：

```text
https://luvisdru9.github.io/
```

如果想继续修改，切回开发分支：

```powershell
git switch feature/minimal-light-homepage
```

可选：为当前版本添加备份标签：

```powershell
git tag homepage-v1.1
git push origin homepage-v1.1
```