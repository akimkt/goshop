<template>
<view class="container" :style="{height:pageHeight,overflow:'hidden'}">
	<!-- 搜索区 -->
	<search @search="disableScroll" />
	<!-- 焦点图 -->
	<view class="fcs">
		<swiper 
		indicator-dots
        autoplay
		circular
		:interval="3000">
          <swiper-item v-for="item in banners" :key="item.goods_id">
            <navigator url="">
				<image :src="item.image_src"/>
			</navigator>
          </swiper-item>
      </swiper>
	</view>
	<!-- 主导航 -->
	<view class="nav">
		<navigator url="" v-for="item in navs" :key="item.name">
			<image :src="item.image_src" :alt="item.name"></image>
			<h2></h2>
		</navigator>
	</view>
	<!-- 楼层 -->
	<view class="floors">
		<view class="floor" v-for="item in products" :key="item.name">
			<view class="title">
				<image :src="item.floor_title.image_src" :alt="item.floor_title.name"></image>
			</view>
			<view class="item">
				<navigator v-for="detail in item.product_list" :url="detail.navigator_url" :key="detail.name">
					<image :src="detail.image_src"></image>
				</navigator>
			</view>			
		</view>
	</view>
	<view class="gotop" @click="goTop" v-if="scrollHeight>100">回顶部</view>
</view>
</template>

<script>
import search from '@/components/search'
	export default {
		components:{
			search
		},
		data() {
			return {
				banners:[],
				navs:[],
				products:[],
				// 窗口可用高度
				pageHeight :'auto',
				scrollHeight:0
			}
		},
		onLoad() {
			this.getBanners()
			this.getNavs()
			this.getFloors()
		},
		// 监听用户下拉刷新操作，重新获取数据
		async onPullDownRefresh(){
			await this.getBanners()
			await this.getNavs()
			await this.getFloors()
			// 刷新数据完成，关闭下拉刷新加载效果
			uni.stopPullDownRefresh()
		},
		// 监听用户垂直滚动页面
		onPageScroll(h){
			const {scrollTop} = h
			this.scrollHeight=scrollTop
		},
		methods: {
			// 获取焦点图数据
			async getBanners(){
				try{
					const { message } = await this.$http({
						url:'/api/public/v1/home/swiperdata'
					})
					this.banners = message
				} catch(err){
					return err
				}
			},
			// 获取分类导航
  			async getNavs(){
				  const { message } = await this.$http({url:'/api/public/v1/home/catitems'})
				  this.navs = message
			  },
			  // 获取电梯导航数据
  			async getFloors(){
				  const { message } = await this.$http({url:'/api/public/v1/home/floordata'})
				  this.products = message
			  },
			  // 点击搜索获取到搜索组件中传来的可用高度信息
			  disableScroll(value){
				  // 页面是固定可视高度时，不可滚动，页面是auto时，可垂直滚动
				  this.pageHeight = value
			  },
			  // 回顶部
			  goTop(){
				  uni.pageScrollTo({scrollTop:0})
			  }
		}
	}
</script>

<style lang="less">
	.fcs{
		swiper{
			height: 340rpx;
			width: 100%;
			background-color: #ff0;
			navigator{
				display: block;
				height: 100%;
			}
		}
	}
	.nav{
		display: flex;
		justify-content:space-between;
		padding:24rpx 20rpx 29rpx;
		navigator{
			width: 128rpx;
			height: 140rpx;

		}
	}
	.floors{
		.floor{
			.title{
				height: 60rpx;
				padding: 20rpx 0 0 8rpx;
				background-color: #f4f4f4;

			}
			.item{
				margin: 20rpx 16rpx;
				overflow: hidden;
				navigator{
					width: 193rpx;
					height: 188rpx;
					margin-left: 10rpx;
					float: left;
					&:first-child{
						width: 232rpx;
						height: 386rpx;
						margin-left: 0;
					}
					&:nth-child(3),&:nth-child(4){
						width: 273rpx;
					}
					&:nth-last-child(-n+2){
						margin-top: 10rpx;
					}
				}
			}
			&:first-child{
				.item{
					navigator:nth-child(n+2){
						width: 233rpx;
						height: 188rpx;
					}
				}
					
			}
		}

	}
	.gotop{
		height: 90rpx;
		width: 90rpx;
		position: fixed;
		bottom: 50rpx;
		right: 30rpx;
		border-radius: 50%;
		background-color: #fff;
		line-height: 120rpx;
		text-align: center;
		font-size: 24rpx;
		&::before{
			content: '';
			display: block;
			width: 30rpx;
			height:30rpx;
			border-top: 1px solid #000;
			border-left: 1px solid #000;
			transform: rotate(45deg);
			position: absolute;
			top: 10rpx;
			left: 50%;
			margin-left: -15rpx;
		}
	}
</style>
