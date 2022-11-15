import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
  }
}

import components from './config/component'

// export default ({ Vue }) => {
//     components.forEach(({name, component}) => Vue.component(name, component))
// }