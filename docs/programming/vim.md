---
sidebar_position: 2
---

# Vim

`vim` is a very nice and beautiful text editor. I just have to learn a bit of its intricacies.

## Navigation


## Screen Navigation

| Key bindings | Descriptions |
| :--- | :--- |
| `zz` | center this line |
| `zt` | top this line |
| `zb` | bottom this line |
| `H` `M` `L` | move to top, middle, or bottom of the screen |


## File Navigation

| Key bindings | Descriptions |
| :--- | :--- |
| `:tabedit [file]` | edit file in a new tab |
| `:tabfind [file]` | open file if exists in new tab |
| `:tabclose` | close current tab |
| `:tabs` | lists all tabs |
| `:tabfirst` | go to first tab |
| `:tablast` | go to last tab |
| `:tabn` | go to next tab |
| `:tabp` | go to previous |

## Searching

| Key bindings | Descriptions |
| :--- | :--- |
| `/{pattern}` | search |
| `n` | next matching search pattern |
| `N` | previous match |
| `*` | next exact word under cursor |
| `#` | previous exact word under cursor |


## Modifying Text

| Key bindings | Descriptions |
| :--- | :--- |
| `a` | append |
| `A` | append from end of line |
| `i` | insert |
| `o` | insert to next line |
| `O` | insert to previous line |
| `s` | delete char and insert |
| `S` | delete line and insert |
| `C` | delete until end of line and insert |
| `r` | replace one character |
| `R` | enter replace mode |
| `u` | undo changes |
| `Ctrl` + `R` | redo changes |

## Editing Text

| Key bindings         | Descriptions                               |     |
| :------------------- | :----------------------------------------- | --- |
| `x`                  | delete character                           |     |
| `dd`                 | cut                                        |     |
| `yy`                 | copy                                       |     |
| `p`                  | paste                                      |     |
| `P`                  | paste before                               |     |
| `" * p`              | paste from clipboard                       |     |
| `" * y`              | paste to clipboard                         |     |
| `:%/foo/bar/g`       | replace `foo` with `bar` in whole document |     |
| `>`                  | indent right                               |     |
| `<`                  | indent left                                |     |
| `=`                  | autoindent                                 |     |
| `g~` / `guu` / `gUU` | swap case / uppercase / lowercase          |     |
