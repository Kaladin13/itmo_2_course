;;;; matrix_tryout.asd

(asdf:defsystem #:matrix_tryout
  :description "First lab in computational math classes"
  :author "kaladin <maksim.lagus@yandex.ru>"
  :license "GPL"
  :version "0.0.1"
  :serial t
  :depends-on (#:lla)
  :components ((:file "package")
               (:file "matrix_tryout")
               (:file "macros")
               (:file "convert")
               (:file "iterate")))
