<!-- 角色选择页 -->
<template>
  <view class="container">
    <view > 
      <image src='https://i.loli.net/2020/06/16/kwgDlGRmxvc3T6V.jpg' class="logo" ></image>
    </view>
    <view class="roleBox">
      <button class="worker" type="primary" @tap='navigateToWorker'>我是员工</button>
      <button class="boss"  type="primary" @tap='navigateToBoss'>我是老板</button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return{

    }
  },
  methods:{
    navigateToWorker(){
      uni.navigateTo({
         url: '/pages/index/index'
      })
    },
    navigateToBoss() {
      uni.navigateTo({
         url: '/pages/boss/boss'
      })
    }
  }
}
</script>
<style lang="scss">
.container {
  width:100%;
  height: 120px;
  //border: 1px groove;
  margin: 0 auto;
  .logo{
    width: 100%;
    height: 120px;
    &:first-child{
      width:375px;
      height:150px;
    }
  }
  .roleBox {
    width: 300px;
    height: 300px;
    padding-top: 30px;
    margin:100px auto;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(207, 203, 203);
    background-color: #fff;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    button{
      width:200px;
      height:50px
    }
  }
}
</style>