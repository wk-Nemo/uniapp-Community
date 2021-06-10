<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
    $width: 200rpx;
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
        .logo {
            height: $width;
            width: $width;
            margin: $width auto 50rpx auto;
        }
        .text-area {
            display: flex;
            justify-content: center;
        }
        .title {
            font-size: 36rpx;
            color: #8f8f94;
        }
	}
</style>
