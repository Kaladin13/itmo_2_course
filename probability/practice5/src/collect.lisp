(in-package #:practice5)

(defmacro with-collect ((&rest collectors) &body forms)
  #+clisp
  (let ((ret (mapcar (lambda (cc) (gensym (format nil "~s-RET-" cc)))
                 collectors)))
    `(let (,@ret)
       (declare (list ,@ret))
       (macrolet ,(mapcar (lambda (co re) `(,co (form) `(push ,form ,',re)))
                      collectors ret)
         ,@forms
         (values ,@(mapcar (lambda (re) `(sys::list-nreverse ,re)) ret)))))
  #-clisp
  (let ((ret (mapcar (lambda (cc) (gensym (format nil "~s-RET-" cc)))
                 collectors))
        (tail (mapcar (lambda (cc) (gensym (format nil "~s-TAIL-" cc)))
                  collectors))
        (tmp (mapcar (lambda (cc) (gensym (format nil "~s-TMP-" cc)))
                 collectors)))
    `(let (,@ret ,@tail)
       (declare (list ,@ret ,@tail))
       (macrolet ,(mapcar (lambda (co re ta tm)
                            `(,co (form)
                               `(let ((,',tm (list ,form)))
                                  (if ,',re (setf (cdr ,',ta) (setf ,',ta ,',tm))
                                      (setf ,',re (setf ,',ta ,',tm))))))
                      collectors ret tail tmp)
         ,@forms
         (values ,@ret)))))