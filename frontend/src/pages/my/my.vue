<template>
	<view class="my">
		<view class="my-header">
			<view class="my-header-left">
				<img src="../../static/head.png" alt="">
			</view>
			<view class="my-header-right">
				<view class="my-header-right-msg">
					<view class="my-header-right-msg-item">
						<view class="my-header-right-msg-item-number">{{fans}}</view>
						<view class="my-header-right-msg-item-info">粉丝</view>
					</view>
					<view class="line"></view>
					<view class="my-header-right-msg-item">
						<view class="my-header-right-msg-item-number">{{focus}}</view>
						<view class="my-header-right-msg-item-info">关注</view>
					</view>
					<view class="line"></view>
					<view class="my-header-right-msg-item">
						<view class="my-header-right-msg-item-number">{{'Lv.' + grade}}</view>
						<view class="my-header-right-msg-item-info">等级</view>
					</view>
				</view>
				<view class="my-header-right-editor">
					<button @click="changeUserInfo">编辑信息</button>
				</view>
			</view>
		</view>
		<view class="my-msg">
			<view class="my-msg-title">基本信息</view>
			<view class="my-msg-item">年龄:{{'  '  + age}}</view>
			<view class="my-msg-item">性别:{{'  '  + isMan}}</view>
			<view class="my-msg-item">地区:{{'  '  + location}}</view>
		</view>
		<view class="my-favorite">
			<view class="my-favorite-title">音乐品味</view>
			<view class="my-favorite-item">
				<image
					src="https://p1.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg?param=300x300"
					class="my-favorite-item-img"
				></image>
				<view class="my-favorite-item-content">
					<view class="my-favorite-item-content-name">我喜欢的音乐</view>
					<view class="my-favorite-item-content-songs">396首，播放4740次</view>
				</view>
			</view>
			<view class="my-favorite-item">
				<image
					src="https://p1.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg?param=300x300"
					class="my-favorite-item-img"
				></image>
				<view class="my-favorite-item-content">
					<view class="my-favorite-item-content-name">我喜欢的音乐</view>
					<view class="my-favorite-item-content-songs">396首，播放4740次</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: {
			// age() {
			// 	return this.$store.state.age;
			// },
			isMan() {
				return this.$store.state.sexy ? '男' : '女';
			},
			// location() {
			// 	return this.$store.state.location;
			// }
			...mapState([
				'fans',
				'focus',
				'grade',
				'age',
				'location'
			])
		},
		onLoad() {

		},
		methods: {
			changeUserInfo() {
				this.$store.commit('addAge', 1);
				this.$store.commit('changeSexy');
				this.$store.commit('changeLocation', '安徽池州');
			}
		}
	}
</script>

<style>
uni-page-body, uni-page-refresh {
	height: 100%;
}
</style>

<style lang="scss">
.my {
	background-color: #eae8e9;
	height: 100%;
}

.line {
	border-right: 1px solid #dedede;
	height: 60%;
	transform: translate(0, 20%);
}

.my-header {
	display: flex;
	.my-header-left {
		border-radius: 50%;
		padding: 4vh 4vw;
		img {
			width: 27vw;
			height: 27vw;
		}
	}
	.my-header-right {
		width: 100%;
		padding: 4vh 4vw;
		.my-header-right-msg {
			width: 100%;
			height: 50%;
			display: flex;
			justify-content: center;
			align-content: center;
			.my-header-right-msg-item {
				width: 33%;
				text-align: center;
				.my-header-right-msg-item-info {
					color: #c5c5c5;
					font-size: 13px;
				}
			}
		}
		.my-header-right-editor {
			width: 100%;
			height: 50%;
			button {
				height: 2rem;
				line-height: 2rem;
				border-radius: 1rem;
				background: #f0f0f0;
				border: 1px solid #dbdbdb;
				font-size: 0.8rem;
				font-weight: 0;
				color: black;
			}
			button::after {
				border: none;
			}
		}
	}
}

.my-msg {
	background: #ffffff;
	margin: 0vh 4vw;
	border-radius: 10px;
	padding: 3vh 4vw 1vh 4vw;
	color: #7d7d7d;
	.my-msg-title {
		font-size: 25px;
		font-weight: 500;
		color: black;
	}
	.my-msg-item {
		margin: 3vh 0;
		font-size: 16px;
	}
}

.my-favorite {
	background: #ffffff;
	margin: 3vh 4vw;
	border-radius: 10px;
	padding: 3vh 4vw 1vh 4vw;
	color: #7d7d7d;
	.my-favorite-title {
		font-size: 25px;
		font-weight: 500;
		color: black;
	}
	.my-favorite-item {
		height: 20vw;
		display: flex;
		align-content: center;
		margin: 2vh 0;
		.my-favorite-item-img {
			width: 20vw;
			height: 20vw;
			border-radius: 6px;
		}
		.my-favorite-item-content {
			margin-left: 11px;
			.my-favorite-item-content-name {
				line-height: 12vw;
				font-size: 23px;
				color: black;
			}
			.my-favorite-item-content-songs {
				line-height: 5vw;
				font-size: 16px;
				margin: 2px 0;
			}
		}
	}
}
</style>
