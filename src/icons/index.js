import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

// require.context('./svg', false, /\.svg$/) webpack里的一个工具，返回一个对象
// 第一个参数：指定文件夹
// 第二个参数：是否递归查找
// 第三个参数：正则表达式
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
// 以上两行代码的含义就是将所有svg目录下.svg后缀的文件引入到项目中
