(in-package #:practice5)

(defun get-variational ()
  (setf *data* (sort *data* #'<))
  (format T "Variational series: ~a ~%" *data*))

(defun get-extreme ()
  (format T "Extreme values: ~D, ~{~D~} ~%"
    (first *data*) (last *data*)))

(defparameter range (- (first (last *data*)) (first *data*)))

(defun get-range ()
  (format T "Sample range: ~D ~%" range))