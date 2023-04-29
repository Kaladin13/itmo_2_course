(in-package #:practice5)

(ls-user::defdf emperic-df
                (let* ((array-data (make-array (length *data*) :initial-contents *data*))
                       (emperic-values (map 'vector #'emperic array-data)))
                  (ls-user:make-df
                    '(:F_x :X)
                    (list
                     emperic-values
                     array-data))))

(ls-user::defdf interval-df
                (let* ((cdr-interval (cdr grouped-sequence))
                       (interval-data (make-array (length cdr-interval) :initial-contents cdr-interval))
                       (seq-vactor (make-array (length interval-emperic-values) :initial-contents
                                     interval-emperic-values)))
                  (ls-user:make-df
                    '(:prob :X)
                    (list
                     seq-vactor
                     interval-data))))

(defun emperic-plot ()
  (plot:plot
    (vega:defplot step-chart
      `(:title "Emperic function F*_n(x) graphic"
               :data ,emperic-df
               :mark (:type :line :interpolate "step-after")
               :encoding (:x (:field :X :type :nominal :title X)
                             :y (:field :F_x :type :quantitative :title F_x))))))

(defun polygon-plot ()
  (plot:plot
    (vega:defplot simple-line-plot
      `(:title "Polygon probability graphic"
               :data ,interval-df
               :mark :line
               :encoding (:x (:field :X :type :nominal :title X)
                             :y (:field :prob :type :quantitative :title probability))))))

(defun hystogram-plot ()
  (plot:plot
    (vega:defplot step-chart
      `(:title "Hystogram graphic"
               :data ,emperic-df
               :mark :bar
               :encoding (:x (:field :X :bin (:maxbins 6) :title X)
                             :y (:aggregate :count))))))