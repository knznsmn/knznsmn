---
sidebar_position: 3
---

# Resetting A Repository


Steps to reset a GitHub repository:

1. `if (!repository)`, clone the repository:
```bash
git clone <remote repository>
cd <repository>
```

:::info
To check the current remote url of the repository:
```bash
git remote -v
```
:::

2. Remove all git history:
```bash
rm -rf .git
```

3. Reinitialize git:
```bash
git init
```

4. Reconnect the repository to GitHub:
```bash
git remote add origin <remote repository url> 
```

5. Create a new commit:
```bash
touch README.md # Add at least one file to commit
git commit -m "Reset repository"
```

6. Force `push` to GitHub:
```bash
git push --force origin main
```

Replace `main` with the branch name if it's different.

:::caution
- This completely erases all previous commits and files.
- GitHub will not retain old versions after the force push.
:::

