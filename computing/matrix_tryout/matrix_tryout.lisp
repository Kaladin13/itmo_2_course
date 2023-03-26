;;;; matrix_tryout.lisp

(in-package #:matrix_tryout)

(defun divide-by-nth (v n)
  (let ((div-elem (- (nth n v))))
    (mapcar (lambda (item)
              (let ((val (/ item div-elem)))
                (if (equal val -1)
                    0
                    val)))
        v)))

(defun fetch-matrix (matrix)
  (with-collect (l)
    (dotimes (i (length matrix))
      (l (divide-by-nth (nth i matrix) i)))))

(defun collect-main (matrix)
  (with-collect (l)
    (dotimes (i (length matrix))
      (l (nth i (nth i matrix))))))

(defun nn (m)
  (lla:mm (list-to-array (collect-main m) 1) #(1 10)))

(defun div-vectors (v1 v2)
  (with-collect (l)
    (dotimes (i (length v1))
      (l (/ (nth i v1) (nth i v2))))))

(defun op-vectors (v1 v2 op)
  (with-collect (l)
    (dotimes (i (length v1))
      (l (funcall op (nth i v1) (nth i v2))))))

(defun make-iter (c d x)
  (let* ((cx (lla:mm (list-to-array c 2) (list-to-array x 1)))
         (iter-val (op-vectors (array-to-list cx) d (lambda (x1 x2) (+ x1 x2)))))
    iter-val))

(defun max-diff (v1 v2)
  (let ((l1 (mapcar #'abs (div-vectors v2 v1))))
    (format T "~a~%" l1)
    (apply #'max l1)))

(defun solve-iter (matrix b &optional x)
  (let* ((main-diag (collect-main matrix))
         (d (div-vectors b main-diag))
         (mul-right (fetch-matrix matrix))
         (v1 d)
         v2
         max-df
         eps)

    (format T "C: ~a~%" mul-right)
    (format T "D: ~a~%" d)

    (setf x d)

    (setf eps 10)

    (loop
     (setf v2 (make-iter mul-right d x))
     (setf max-df (max-diff v1 v2))
     (setf x v2)
     (format T "Iteration result: ~a~%" v2)
     (format T "Max difference with previous iteration: ~a" max-df)
     (when (<= max-df eps) (return 1)))))

(defun try ()
  (MATRIX_TRYOUT::SOLVE-ITER '((10000000000 1 2 3 4) (2 31 5 6 7) (6 7 68 9 1) (2 3 5 70 8) (1 2 4 7 89)) '(5 8 2 9 9)))
