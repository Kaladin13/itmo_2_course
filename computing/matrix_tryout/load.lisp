(defun load-project ()
  (pushnew (truename ".") ql:*local-project-directories*)
  (ql:register-local-projects)
  (ql:quickload "matrix_tryout"))