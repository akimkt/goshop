<template>
    <view class="search" :class="{focus:focus}">
        <input type="text" @focus="onFocus">
        <text @click="cancelSearch">取消</text>
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
            this.focus=true
        },
        cancelSearch(){
            this.focus=false
        }
    }
}
</script>
<style lang='less' scoped>
.search{
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
    &.focus{
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
}
</style>