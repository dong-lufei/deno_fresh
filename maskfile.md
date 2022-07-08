# Tasks

## deno_dir

```sh
echo 'export DENO_DIR=$HOME/dev/deno_modules' >> $HOME/.profile
echo 'set DENO_DIR $HOME/dev/deno_modules' >> $HOME/.config/fish/config.fish
```

## run-dev

```sh
podman run --rm -ti \
  --name fresh_demo \
  -p 8000:8000 \
  -v $(pwd):/root/dev \
  -v /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe \
  mooxe/dev \
  /bin/bash
```

## start

```sh
deno task start
```
