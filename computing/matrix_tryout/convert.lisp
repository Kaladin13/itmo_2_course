(in-package #:matrix_tryout)

(defun list-dimensions (list depth)
  (loop repeat depth
        collect (length list)
        do (setf list (car list))))

(defun list-to-array (list depth)
  (make-array (list-dimensions list depth)
    :initial-contents list))

(defun array-to-list (array)
  (let* ((dimensions (array-dimensions array))
         (depth (1- (length dimensions)))
         (indices (make-list (1+ depth) :initial-element 0)))
    (labels ((recurse (n)
                      (loop for j below (nth n dimensions)
                            do (setf (nth n indices) j)
                            collect (if (= n depth)
                                        (apply #'aref array indices)
                                        (recurse (1+ n))))))
      (recurse 0))))