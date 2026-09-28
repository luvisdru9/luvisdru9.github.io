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

是的。

第二步把修改合并并推送到 `main`，通常会触发 GitHub Pages 更新，使新主页出现在：

[https://luvisdru9.github.io/](https://luvisdru9.github.io/)

如果暂时不想公开新个人主页，只执行第一步即可：

```powershell
cd C:\Users\luvis\homepage

git add .
git commit -m "Update homepage content and honors section"
git push origin feature/minimal-light-homepage
```

这样修改会安全保存在 GitHub 的 `feature/minimal-light-homepage` 分支中，但不会影响当前线上主页。

之后准备公开时再执行：

```powershell
git switch main
git pull --ff-only origin main
git merge --ff-only feature/minimal-light-homepage
git push origin main
```

注意：GitHub 仓库本身是 Public，因此功能分支上的源代码和内容仍可被别人访问，只是不会作为 `luvisdru9.github.io` 的主页展示。