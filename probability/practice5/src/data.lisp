(in-package #:practice5)

(defvar *data*)

(defun save-data (filename data)
  (with-open-file (out filename :direction :output :if-exists :supersede :if-does-not-exist :create)
    (with-standard-io-syntax
      (print data out))))

(defun load-data (filename)
  (with-open-file (in filename)
    (with-standard-io-syntax
      (setf *data* (read in)))))
