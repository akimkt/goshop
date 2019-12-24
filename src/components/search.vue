<template>
<!-- 获取焦点时，类名focus生效，控制样式改变 -->
<view class="search" :class="{focus:focus}">
    <view class="input-box">
        <input type="text" @focus="onFocus" @confirm='goshearch'>
        <text @click="cancelSearch">取消</text>
    </view>
    <view class="searchList">
        <view class="history">
            <text>搜索历史</text><icon type="clear" @tap="clearHistory"></icon>
            <view class="list">
                <navigator>小米</navigator>
                <navigator>小米智能电视</navigator>
                <navigator>小米空气净化器</navigator>
                <navigator>西门子洗碗机</navigator>
                <navigator>华为手机</navigator>
                <navigator>苹果</navigator>
                <navigator>锤子</navigator>
            </view>
        </view>
    </view>
</view>    
</template>

<script>

export default {
    data(){
        return{
            focus:false
        }
    },
    methods:{
        onFocus(){
            // 获取焦点时，通过focus控制类名实现样式改变
            this.focus=true
            // 获取设备可用高度，传值给页面
            const { windowHeight } = uni.getSystemInfoSync()
            this.$emit('search',windowHeight+'rpx')
        },
        cancelSearch(){
            // 失去焦点时，恢复样式
            this.focus=false
            // 将父页面高度设为自动不再固定高度
            this.$emit('search','auto')
        },
        clearHistory(){
            console.log('清除搜索历史')
        },
        goshearch(){
            console.log('搜索')
        }
    }
}
</script>
<style lang='less' scoped>
    .search{
        .input-box{
            display: flex;
            padding:20rpx 16rpx;
            background-color: #ff2d4a;
            position: relative;
            &::before{
                content:'';
                display: none;
                position: absolute;
                top: 50%;
                left: 30rpx;
                width: 32rpx;
                height: 32rpx;
                background: url('http://static.botue.com/ugo/images/icon_search%402x.png') no-repeat;
                background-size: 32rpx 32rpx;
                transform:translate(0,-50%);
            }
            &::after{
                content:'搜索';
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                background: url('http://static.botue.com/ugo/images/icon_search%402x.png') no-repeat;
                background-size: 32rpx 32rpx;
                line-height: 32rpx;
                transform:translate(-50%,-50%);
                font-size: 24rpx;
                padding-left: 50rpx;
                color: #c0c0c0;
            }
            input{
                flex: 1;
                height: 60rpx;
                background-color: #fff;
                border-radius: 10rpx;
                padding-left: 60rpx;
            }
            text{
                display: none;
                line-height: 60rpx;
                width: 158rpx;
            }
        }
        .searchList{
            display: none;
            position: absolute;
            top: 100rpx;
            bottom: 0;
            left:0;
            right:0;
            background-color: #fff;
            .history{
                padding: 28rpx 30rpx 0 16rpx;
                vertical-align: middle;
                text{
                    float: left;
                    width: 50%;
                    font-size: 30rpx;
                    text-align: left;
                }
                icon{
                    float: left;
                    width: 50%;
                    font-size: 30rpx;
                    text-align: right;
                }
                .list{
                    padding-top: 14rpx;
                    navigator{
                        float: left;
                        background-color: #ddd;
                        line-height: 64rpx;
                        padding: 0 25rpx;
                        font-size: 22rpx;
                        margin-right: 30rpx;
                        margin-top: 18rpx;
                    }
                }
            }
        }
        &.focus{
            .input-box{
                background-color: #eee;
                text{
                    display: block;
                    text-align: center;
                    font-size: 30rpx;
                    color: #333333;
                }
                &::before{
                    display: block;
                }
                &::after{
                    display: none;
                }
            }
            .searchList{
                display: block;
                z-index: 9;
            }
        }
    }

</style>