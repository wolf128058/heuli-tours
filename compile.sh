#!/bin/bash

pandoc -s --toc --from markdown --to html5 --standalone --template=bootstrap.tpl.html content.md -o index.html
