;;;; matrix_tryout.lisp

(in-package #:matrix_tryout)

(defun name-matrix ()
  (format T "Multiply some matrix"))

(defun divide-by-nth (v n)
  (let ((div-elem (- (nth n v))))
    (mapcar (lambda (item) (/ item div-elem)) v)))

(defun fetch-matrix (matrix)
  (with-collect (l)
    (dotimes (i (length matrix))
      (l (divide-by-nth (nth i matrix) i)))))

(defun collect-main (matrix)
  (with-collect (l)
    (dotimes (i (length matrix))
      (l (nth i (nth i matrix))))))

(defun nn ()
  (print (lla:mm #(1 2 3)
                 #(2 3 4))))