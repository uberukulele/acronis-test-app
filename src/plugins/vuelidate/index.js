import Vue from 'vue'
import Vuelidate from 'vuelidate'

const vuelidataionErrors = {
  install (Vue) {
    Vue.mixin({
      beforeCreate () {
        const options = this.$options
        const vals = options.validations
        if (!vals) {
          return
        }
        if (!options.computed) {
          options.computed = {}
        }
        options.computed.vErrors = () => {
          var paramsExtractor = params => {
              var newParams = {}
              if (params) {
                Object.keys(params).map(key => {
                  if (params[key] instanceof Object) {
                    newParams = {
                      ...params[key],
                      ...newParams
                    }
                  } else {
                    newParams[key] = params[key]
                  }
                })
              }
              return newParams
            }, result = {},
            walker = (target, res, parent_key) => {
              var t = target[parent_key],
                r = res[parent_key]

              Object.keys(t)
                .filter(key => key[0] !== '$' || key === '$each')
                .map(key => {
                  if (t[key] instanceof Object) {
                    if (key === '$each') {
                      r[key] = []
                    } else {
                      r[key] = {}
                    }

                    walker(t, r, key)
                  } else {
                    var params = t.$params
                    if (!(res[parent_key] instanceof Array)) {
                      res[parent_key] = []
                    }
                    if (!t[key]) {
                      res[parent_key].push(this.$t(`common.validation.${key}`, paramsExtractor(params[key])))
                    }
                  }
                })
            }

          walker({ a: this.$v }, { a: result }, 'a')

          return result
        }
      }
    })
  }
}

Vue.use(Vuelidate)
Vue.use(vuelidataionErrors)
