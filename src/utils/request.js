// import Vue from 'vue'
// const baseURL = 'https://ugo.botue.com'
// Vue.prototype.$http = async function (url,method='get',data) {
//     uni.showLoading({
//         title: '加载中'
//       })
//   const res = await uni.request({
//         url:baseURL+url,
//         method,
//         data
//     })
//     uni.hideLoading()
//     if(res[1].data.message){
//         return res[1].data.message
//     }
//     else{
//         return res
//     }
//   }
// 定义一个方法 配置参数例如baseURL
export default function(options) {
    // 收到baseURL
    const { baseURL } = options
    // 返回函数给vue注册插件
    return function(vue) {
        // 挂载$http到vue下
        vue.prototype.$http= async (params) => {
            // 调用时传一个对象进来
            const {url,type='get',data} = params
            uni.showLoading({
                title:'加载中'
            })
            // 调用$http时，发送请求,收取返回的响应数据
           const res = await uni.request({
                url:baseURL+url,
                type,
                data
            })
            // 请求获取数据完成，隐藏loading
            uni.hideLoading()
            // 将返回的响应数据处理后返回
            
            if(res[1].data){
                return res[1].data 
            }
            else{
                return res
            }
        }
    }
}