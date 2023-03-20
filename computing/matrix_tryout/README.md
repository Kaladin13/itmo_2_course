# Matrix tryout

### _kaladin <maksim.lagus@yandex.ru>_

This is a project to do something.

### Build

```
sudo apt-get install sbcl
sudo apt-get install libblas-dev liblapack-dev
sbcl
(load "quicklisp.lisp")
(quicklisp-quickstart:install)
(ql:add-to-init-file)
(ql:quickload "bordeaux-threads")
(ql:quickload "usocket")
(ql:quickload "cl-json")
(ql:quickload "flexi-streams")
```

## License

Specify license here
