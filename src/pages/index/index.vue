<template>
<view class="container">
	<!-- 搜索区 -->
	<search />
	<!-- 焦点图 -->
	<view class="fcs">
		<swiper 
		indicator-dots
        autoplay
		circular
		:interval="3000">
          <swiper-item v-for="(item,index) in banners" :key="index">
            <image :src="item"/>
          </swiper-item>
      </swiper>
	</view>
	<!-- 主导航 -->
	<view class="nav">
		<navigator url="">
			<image src="https://www.zhengzhicheng.cn/pyg/icon_index_nav_4@2x.png"></image>
			<h2></h2>
		</navigator>
		<navigator url="">
			<image src="https://www.zhengzhicheng.cn/pyg/icon_index_nav_3@2x.png"></image>
			<h2></h2>
		</navigator>
		<navigator url="">
			<image src="https://www.zhengzhicheng.cn/pyg/icon_index_nav_2@2x.png"></image>
			<h2></h2>
		</navigator>
		<navigator url="">
			<image src="https://www.zhengzhicheng.cn/pyg/icon_index_nav_1@2x.png"></image>
			<h2></h2>
		</navigator>
	</view>
	<!-- 楼层 -->
	<view class="floors">
		<view class="floor">
			<view class="title">
				<image src="https://www.zhengzhicheng.cn/pyg/pic_floor01_title.png"></image>
			</view>
			<view class="item">
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor01_1@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor01_2@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor01_3@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor01_4@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor01_5@2x.png"></image>
				</navigator>
			</view>			
		</view>
		<view class="floor">
			<view class="title">
				<image src="https://www.zhengzhicheng.cn/pyg/pic_floor02_title.png"></image>
			</view>
			<view class="item">
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor02_1@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor02_2@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor02_3@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor02_4@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor02_5@2x.png"></image>
				</navigator>
			</view>
		</view>
		<view class="floor">
			<view class="title">
				<image src="https://www.zhengzhicheng.cn/pyg/pic_floor03_title.png"></image>
			</view>
			<view class="item">
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor03_1@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor03_2@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor03_3@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor03_4@2x.png"></image>
				</navigator>
				<navigator url="">
					<image src="https://www.zhengzhicheng.cn/pyg/pic_floor03_5@2x.png"></image>
				</navigator>
			</view>
		</view>
	</view>
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
				banners:['https://www.zhengzhicheng.cn/pyg/banner1.png','https://www.zhengzhicheng.cn/pyg/banner2.png','https://www.zhengzhicheng.cn/pyg/banner3.png']
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
.container {
	.fcs{
		swiper{
			height: 340rpx;
			width: 100%;
			background-color: #ff0;
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
}
</style>
