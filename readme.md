# Noob__ui

> This is the yeoman template 

## How to install

Prerequisites:
* [Node.js](http://nodejs.org/) 
* [Bower](http://bower.io/) 

Installation process:

1. Clone this repository
2. Run ```npm install``` to install dependencies
3. Run ```bower install``` to install front-end dependencies

## Usage

For project development with livereload run:
```
gulp serve
```

To build project run: (Result will be in ```dist/``` folder.)
```
gulp build [--force] 
```

## Structure
Scss folder(styles/)

1. base/ — global styles (type, reset etc...)
2. components/ — styles for components (nav, paginator, breadcrumbs etc...)
3. layout/ — main components for project (header, footer)
4. pages/ — styles for unique pages 
5. themes/ — styles for custom themes
6. utils/ — mixins and functons
7. vendors/ — style plug-ins
main.scss — end file

Jade folder (views/)

1. data/ — data type .json
2. layouts/ — the template wrappers
4. modules/ — the most used modules (footer, sidebar, header, pager etc...)
5. mixins/ — mixins and functons
index.jade — index.html

This framework #noob__ui based on (generator-lb)
