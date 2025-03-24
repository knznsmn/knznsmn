---
sidebar_position: 6
---

# Setting Up Git

## Git
Git is a distributed version control system[^1].

## Setting Up git
This[^2] .

### Update the System
```bash
sudo apt update
sudo apt upgrade
```

### Set up a Git username:
```bash
git config --global user.name ""
```
To confirm that you have set the username correctly,
```bash
git config --global user.name
```
The enclosing quotations marks are empty intentionally. You should type your username in between.

### Set an email address:
```bash
git config --global user.email ""
```
To confirm that you have set the email address correctly,
```bash
git config --global user.email
```
If you opted to use the private GitHub email address, you can use a GitHub-provided `noreply` email address[^3]. Then use this command instead,
```bash
git config --global user.email "id+username@users.noreply.github.com"
```

## Configuring git
### To change the default branch for git,
```bash
git config --global init.defaultBranch main
```

### To enable colorful output with git,
```bash
git config --global color.ui auto
```

### To set the default branch reconciliation behavior to merging,
```bash
git config --global pull.rebase false
```
[^1]: [Git Documentation. (n.d.) _About Version Control_](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
[^2]: [The Odin Project. (n.d.) _Setting Up Git_](https://www.theodinproject.com/lessons/foundations-setting-up-git)
[^3]: [Github Inc. (2024). _Setting your commit email address_](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)