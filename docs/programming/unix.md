---
sidebar_position: 5
---

# Setting Up Linux For Development

I ~~like~~ hate [Ubuntu](https://ubuntubudgie.org/downloads) as the **best** Linux distribution. Download (hands down) [the best operating system ever](https://www.linuxmint.com/download_lmde.php) here.

LMDE is Debian with Cinammon desktop on top. Ubuntu have a habit of undermining my `sudo` by sneakily installing an ugly package of Firefox. *Au revoir* Ubuntu. *Salut*, Debian !

Update the system:
```bash
sudo apt update && sudo apt upgrade -y
```

### Install tools:
- [git](git.md)
- [gcc](gcc.md)
- [vim](vim.md)
- [openssh](ssh.md)

Always run `apt update` first before installing any software; otherwise, your Linux machine might become Windows, and you'd regret it. Just kidding. In fact, Windows is a great OS, not only for games. Visual Studio is an excellent IDE for developing a variety of applications for all platforms, and it can only be installed on a Windows device, if I'm not mistaken.

```bash
sudo apt update && sudo apt upgrade -y
```

Then install the tools:

```bash
sudo apt install git gcc vim
```

openssh apparently is already installed. If not,
```bash
sudo apt install openssh
```

## Configure the tools:

### git
You can change the name that is associated with your Git commits using the git config command[^1].

This guide assumes that you already have a Github account set up and ready.

1. Set up a Git username:
```bash
git config --global user.name ""
```
To confirm that you have set the username correctly,
```bash
git config --global user.name
```
The enclosing quotations marks are empty intentionally. You should type your username in between.

2. Set an email address:
```bash
git config --global user.email ""
```
To confirm that you have set the email address correctly,
```bash
git config --global user.email
```

### ssh
3. Next is to set up and configure `ssh` to be able to connect and push your codes to your Github repositories. This is also true when using Sublime Merge. Generating ssh keys on Working Copy is easier.

```bash
ssh-keygen -t ed25519 -C ""
```

4. Copy the contents in the generated `.pub` to your Github's SSH and GPG keys tab or section:
```bash
cat ~/.ssh/id_ed25519.pub
```

### vim

Much of the changes I want to make for my toolbox could most probably be automated. I should learn how to do that someday.

For now, I'll just make a repository for all my config files so I can easily find them all in one place[^2].

1. Create a `.gitignore` containing only `*`.
2. Initialize `home` and set up `git` repository.
```bash
cd ~
git init
git remote add origin git@github.com:knznsmn/dtfls.git
git fetch
git checkout -f main
```

:::note
Found this [page](https://dotfiles.github.io/). Should read this later.
:::

Adding files/directories:
```bash
git add -f <filename>
```
### Install oh-my-bash
Make `bash` a lot prettier for eyescream experience using `oh-my-bash`.
```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"
```
## Download other tools:

* Obsidian --- A nice note-taking app. I add and edit contents of this website with Obsidian.
* Sublime Text --- A text editor for text editing done right, they said. Please don't shoot the messenger.
* Sublime Merge --- An actually decent git GUI client for editing text.
* Zotero --- It is a free tool to help organize, annotate, cite, and share research.

## Encountered Problems and Tried Fixes

### Installing Nvidia driver
To install the official NVIDIA driver instead of the default graphics driver "nouveau".

```bash
sudo apt install nvidia-driver
```

### Disable grub delay
Modify the grub file:
```bash
sudo vim /etc/default/grub
```

### Broken `libdvd-pkg`
I don't understand most of the errors (and even the fixes) of Linux system. But this fix works:
```bash
sudo dpkg-reconfigure libdvd-pkg
```
### Fonts
* [fonts](./) - install fonts at `~/.local/share/fonts`

[^1]: [Github Inc. (2024). Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux)
[^2]: [deVault, D. (2019, Dec 30). Managing my dotfiles as a git repository](https://drewdevault.com/2019/12/30/dotfiles.html))