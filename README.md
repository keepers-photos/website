## Overview

This folder hosts the keepers.photos website. Here are the main moving parts and
how they interact:

1. The HTML source code is located in the `src` folder. The HTML is written in
   Jinja2 templating language. The HTML is compiled into static HTML files using
   the `compile.py` build tool.
2. The javascript, images and other public assets are located in `assets`
   folder. The HTML files from `src` will also be compiled into this folder,
   which becomes the input for the `vite` development server and build tools.
3. Lastly, `vite` build `assets` into the `docs` folder for deployment on github
   pages.

## Setup Dev Environment

```zsh
npm install
python3 -m venv .
pip install -r requirements.txt
. bin/activate
```

Also, we use `modd` to watch for changes in the python files.
[Install it](https://github.com/cortesi/modd/releases/tag/v0.8) if you don't
have it.

To test html on multiple devices simultaenously, we want vite to bind to a local
LAN IP address. (Please refer to `vite.config.js`). Note also that we only use
the last IP address in the list of IP addresses.

Also, from Sonoma onwards, we might get more than one, so we need to pick the
last one, hence the `tail -n 1` part.

```zsh
echo "export VITE_HOST=$(ifconfig | grep -o 'inet 192[^ ]*' | awk '{print $2}' | tail -n 1)" >> ~/.zshrc
source ~/.zshrc
```

## Run

```zsh
modd && node_modules/vite/bin/vite.js dev
```

## Build for deployment

During the build process, the `vite` compile, minimizes and bundles the assets
into the `docs` folder, which is then served by github pages.

```zsh
find src -name '*.html' -exec python compile.py {} \;
node_modules/vite/bin/vite.js build
git add .
git commit
git push
```
