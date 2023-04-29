(in-package #:practice5)

(defun roundto (n p)
  (read-from-string (subseq (concatenate 'string (write-to-string n) "000000") 0 (+ p 2))))