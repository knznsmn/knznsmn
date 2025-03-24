# Killing A Running Server

To kill the running local server:

```bash
sudo lsof -wni tcp:4000
```

This command outputs some text, including the process' PID.

```bash
sudo kill -9 PID
```

