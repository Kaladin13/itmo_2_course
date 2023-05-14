(asdf:defsystem #:practice5
  :description "probability practice"
  :author "kaladin <maksim.lagus@yandex.ru>"
  :license "GPL"
  :version "0.0.1"
  :serial t
  :depends-on ("plot/vega"
               "lisp-stat")
  :pathname "src/"
  :components ((:file "package")
               (:file "main")
               (:file "data")
               (:file "distribution")
               (:file "collect")
               (:file "plotting")
               (:file "rounding")
               (:file "variational")))
