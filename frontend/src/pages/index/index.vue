<template>
	<view>
		<view class="top">
			<view class="header">
				<image
					@click="toUserInfo"
					:src="userAvatarUrl"
				></image>
				<view
					class="header-text"
					v-if="!islogin"
				>未登陆</view>
				<view
					v-else
					class="header-text"
				>
					<view class="header-text-username">{{ username }}</view>
				</view>
			</view>
			<view class="login">
				<button @click="login">{{ isLogin }}</button>
			</view>
		</view>
		<view class="search">
			<image class="search-icon" src="../../static/search.png"></image>
		</view>
		<view class="poster">
			<swiper
				indicator-dots
				circular
				autoplay
				interval=3000
				class="swiper"
			>
				<swiper-item v-for="(item,index) in swipers" :key="index">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="content">
			<view
				class="content-item"
				v-for="item in list"
				:key="item.id"
			>
				<image class="item-img" :src="item.imgSrc"></image>
				<view class="item-songs">
					<view
						class="songmsg"
						v-for="song in item.songs"
						:key="song.id"
					>
						{{song.id}}.{{ song.name }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				title: 'Hello',
				islogin: false,
				userAvatarUrl: '../../static/head.png',
				swipers:[
					"http://p1.music.126.net/R2HLQPJldKOWQtpErHuZ8w==/109951166033980254.jpg",
					"http://p1.music.126.net/VlyBuuxuQH8IRZL12Omf6Q==/109951166036071040.jpg",
					"http://p1.music.126.net/hU9S3Fph9y9fkba9inA3Dg==/109951166035551446.jpg",
					"http://p1.music.126.net/d4tWo2loTU2pQWuvEhjy_w==/109951166036524121.jpg",
					"http://p1.music.126.net/AVakI-z_dSvYrwls-QWC1Q==/109951166033902655.jpg"
				],
				list:[{
					id: 1,
					imgSrc: 'https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg',
					songs: [{
						id: 1,
						name: "California"
					}, {
						id: 2,
						name: "翱翔"
					}, {
						id: 3,
						name: "长街烟火"
					}]
				}, {
					id: 2,
					imgSrc: 'https://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg',
					songs: [{
						id: 1,
						name: "California"
					}, {
						id: 2,
						name: "翱翔"
					}, {
						id: 3,
						name: "长街烟火"
					}]
				}, {
					id: 3,
					imgSrc: 'https://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg',
					songs: [{
						id: 1,
						name: "California"
					}, {
						id: 2,
						name: "翱翔"
					}, {
						id: 3,
						name: "长街烟火"
					}]
				}, {
					id: 4,
					imgSrc: 'https://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg',
					songs: [{
						id: 1,
						name: "California"
					}, {
						id: 2,
						name: "翱翔"
					}, {
						id: 3,
						name: "长街烟火"
					}]
				}]
			}
		},
		onLoad() {

		},
		methods: {
			login() {
				// let self = this
				// wx.getUserProfile({
				// 	desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
				// 	success: (res) => {
				// 		console.log(res)
				// 		self.username = res.userInfo.nickName
				// 		self.islogin = !self.islogin
				// 		self.userAvatarUrl = res.userInfo.avatarUrl
				// 	}
				// })
				this.islogin = !this.islogin
			},
			toUserInfo() {
				if (this.islogin) {
					uni.navigateTo({
						url: '/pages/my/my',
					});
				}
			}
		},
		computed: {
			isLogin () {
				return this.islogin ? "退出登录" : "立即登陆"
			},
			...mapState([
				'username',
				'grade'
			])
		}
	}
</script>

<style lang="scss">
	.top {
		height: 2rem;
		margin-top: 0.5rem;
		padding: 0.5rem 0.7rem;
		.header {
			float: left;
			height: 100%;
			display: flex;
			image {
				height: 100%;
				width: 2rem;
				border-radius: 50%;
			}
			.header-text {
				line-height: 2rem;
				margin-left: 1rem;
				color:#cdcdcd;
				.header-text-username {
					color: black;
					font-weight: 500;
				}
			}
		}
		.login {
			float: right;
			height: 100%;
			button {
				height: 2rem;
				line-height: 2rem;
				border-radius: 1rem;
				background: white;
				border: 1px solid #cdcdcd;
				font-size: 0.8rem;
				font-weight: 0;
				color: black;
			}
			button::after {
				border: none;
			}
		}
	}
	.search {
		height: 1.25em;
		margin: 0.2rem 0.5rem;
		padding: 0.5rem 0.5rem;
		border-radius: 1rem;
		background: #f7f7f7;
		.search-icon {
			float: left;
			height: 100%;
			width: 1.25rem;
		}
	}
	.poster {
		margin-top: 0.5rem;
		swiper{
			width: 750rpx;
		}
		image{
			width: 100%;
			height: 100%;
		}
	}
	.content {
		padding: 0.5rem 0.5rem;
		.content-item {
			display: flex;
			padding: 3px;
			border-bottom: 1px solid #f1f2f3;
			.item-img {
				width: 27vw;
    		height: 27vw;
				border-radius: 3px;
			}
			.item-songs {
				flex: 1 1 0%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				padding: 10px;
				.songmsg{
					font-size: 12px;
    			color: grey;
				}
			}
		}
	}
</style>
