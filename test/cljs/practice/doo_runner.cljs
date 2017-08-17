(ns practice.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [practice.core-test]))

(doo-tests 'practice.core-test)

