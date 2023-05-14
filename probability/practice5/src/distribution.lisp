(in-package #:practice5)

(defun get-expected-value (l)
  (/ (reduce '+ l) (length l)))

(defun get-standart-deviation ()
  (let* ((expected (get-expected-value *data*))
         (deviation (-
                     (get-expected-value (map 'list (lambda (x) (* x x)) *data*))
                     (* expected expected))))
    (format T "Expected value: ~D~%" expected)
    (format T "Standart deviation: ~D~%" deviation)))

(defun emperic (x)
  (float (/
          (reduce '+ (map 'list
                         (lambda (val)
                           (if (< val x) 1 0)) *data*))
          (length *data*))))

(defun interval-f (l r)
  (float (/
          (reduce '+ (map 'list
                         (lambda (val)
                           (if (and (<= l val) (<= val r)) 1 0)) *data*))
          (length *data*))))

(defparameter grouped-sequence
              (let ((h-step (/ range 5))
                    (min-val (first *data*)))
                (with-collect (rv)
                              (dotimes (i 6)
                                (rv (+ min-val (* i h-step)))))))

(defparameter interval-emperic-values
              (map 'list (lambda (x) (roundto x 5))
                (with-collect (res)
                              (dotimes (i 5)
                                (res (interval-f (nth i grouped-sequence) (nth (+ i 1) grouped-sequence)))))))

(defun get-emperic-func ()
  (let ((h-step (/ range 5))
        (min-val (first *data*)))
    (format T "F(x) = 0.0; if x <= -1.1 ~%")
    (dotimes (i 5)
      (format T "F(x) = ~D; if ~D < x <= ~D ~%"
        (emperic (+ min-val (* (+ i 1) h-step)))
        (nth i grouped-sequence)
        (nth (+ i 1) grouped-sequence)))
    (format T "F(x) = 1.0; if 1.11 < x ~%")))