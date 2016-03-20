#!/usr/bin/env bash

iconfont \
    ./modules/symbols/icons/*.svg \
    -o ./modules/symbols/__generated \
    -t ./scripts/templates/Icons_.css.ejs \
    --template-out-dir ./modules/symbols/__generated