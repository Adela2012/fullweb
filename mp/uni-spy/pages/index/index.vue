<template>
	<view class="content">
		<view style="width: 100%;padding:10px 20px;">
			<button @click="btnPhoto">拍照或从相册选择一张照片</button>
		</view>
		<view style="width: 100%;padding:10px 20px;">
			<image :src="imgfile" style="width: 100%;" mode="widthFix"></image>
			<view v-if="recResults.length>0" style="width: 100%;border:1px solid #ccc;border-radius: 10px;padding:10px;">
				<view style="text-align: center;font-size: 14px;color: #999;">识别结果</view>
				<view style="text-align: center;height: 30px;line-height: 30px;">
					{{selectedName}}
				</view>
				<view v-if="searchResults">
					<view v-if="searchResults.matched" style="width: 100%;text-align: center;">{{searchResults.matched.typename}}</view>
					<view v-else style="font-size: 14px;">
						<view v-for="item,index in searchResults.similars" style="display: flex;">
							<view style="flex: 1;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;margin-right: 20px;">{{item.keywords}}</view>
							<view>{{item.typename}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgfile: "",
				recResults: [],
				selectedName: "",
				searchResults: null
			}
		},
		onLoad() {

		},
		methods: {
			btnPhoto() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						console.log(res)
						this.imgfile = res.tempFilePaths[0];
						this.readImage2Base64(this.imgfile);
						// // 重置上一次选择查询的名称
						// this.selectedName = "";
						// this.searchResults = null;
						// this.recResults = [];

						// let candonext = true;

						// // 由于图片转Base64的方法在跨端时API并不统一，所以我们需要根据条件编译，使用对应端的特定API来完成此功能。

						// if (candonext) this.readImage2Base64(this.imgfile);
					}
				})
			},
			readImage2Base64(path) {
				
				// #ifdef MP-WEIXIN
				wx.getFileSystemManager().readFile({
					filePath: path,
					encoding: 'base64',
					success: async (res) => {
						console.log(res);
						const result = await this.imageClassify(res.data);

						this.parseResults(result.result);
					}
				})
				// #endif
				// #ifdef APP-PLUS
				var that = this;
				plus.io.resolveLocalFileSystemURL(
					path,
					(entry) => {
						entry.file(function(file) {
							let reader = new plus.io.FileReader();
							reader.onloadend = async (e) => {
								const base64 = e.target.result.substr(22);
								const result = await that.imageClassify(base64);
								console.log(33, result)
								that.parseResults(result.result);
							};
							reader.readAsDataURL(file);
						});
					}
				);
				// #endif
			},
			async imageClassify(imgB64) {
				return new Promise((resolve, reject) => {
					uniCloud.callFunction({
						name: "ImageClassify",
						data: {
							image: imgB64
						},
						success: (res) => {
							resolve(res.result);
						}
					})
				});
			},
			parseResults(result) {
				this.recResults = result;
				let itemList = [];
				let abs_result_index;
				for (let i = 0; i < result.length; i++) {
					if (result[i].score > .7) {
						abs_result_index = i;
						break;
					}
					itemList.push(result[i].keyword + "" + result[i].score);
				}

				if (abs_result_index >= 0) {
					this.selectRecResult(abs_result_index);
					return;
				}
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						this.selectRecResult(res.tapIndex);
					}
				});
			},
			async selectRecResult(index) {
				this.selectedName = this.recResults[index].keyword;
				const searchRes = await this.searchKeyword(this.selectedName);
				console.log(searchRes);
				this.searchResults = searchRes;
				uni.hideLoading();
			},

			async searchKeyword(kw) {
				return new Promise((resolve, reject) => {
					uniCloud.callFunction({
						name: "TrashClassify",
						data: {
							keyword: kw
						},
						success: (res) => {
							resolve(res.result);
						}
					})
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
