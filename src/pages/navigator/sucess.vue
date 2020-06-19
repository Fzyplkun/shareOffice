<!-- 提交成功页面 -->
<template>
  <view class="container">
    <view class="imgsBox">
      <image src="https://i.loli.net/2020/06/16/e68RxEX2taJGzlq.png" alt="" mode="aspectFit" class="uni-img"></image>
      <h1>提交成功</h1>
    </view>
    <view>
      <button type="primary" @tap='navigateTo' class="backIndex">继续填写</button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods:{
    navigateTo() {
      uni.navigateTo({
         url: '/pages/index/index'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    width:80%;
    margin: 0 auto;
    padding: 0;
    position: relative;
    //容纳图片的盒子
    .imgsBox{
      width:300px;
      height: 200px;
      top: 60px;
      position: relative;
      //设置图片的大小
      .uni-img{
        &:first-child{
          width:300px;
          height:100px;
        }
      }
       h1{
        text-align: center;
        margin: 15px auto;
        font-size: 20px;
      }
    }
    .backIndex{
      width:200px;
      height: auto;
      margin-top: 180px;
    }
  }
</style>