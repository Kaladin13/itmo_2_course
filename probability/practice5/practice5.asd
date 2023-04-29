(asdf:defsystem #:practice5
  :description "probability practice"
  :author "kaladin <maksim.lagus@yandex.ru>"
  :license "GPL"
  :version "0.0.1"
  :serial t
  :depends-on ("plot/vega")
  :components ((:file "package")
               (:file "src/main")
               (:file "src/data")
               (:file "src/distribution")
               (:file "src/variational")))
