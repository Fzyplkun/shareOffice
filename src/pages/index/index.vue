<template>
  <view class="content">
    <view class="title">
      <h3>荥阳美的煤改电信息登记表</h3>
    </view>
    <view class="form" >
     <form>
       <!-- 基本信息 -->
      <view class="base-info">
        <view class="item">
          <span>姓名：</span>
          <input class="uni-input" type="text" placeholder="请输入姓名" v-model="baseInfo.name"/>
        </view>
        <view class="item">
          <span>地址：</span>
          <input class="uni-input" type="text" placeholder="请输入地址" v-model="baseInfo.adress" />
          <uni-icons type="location-filled" size="30" @click='getAddress' ></uni-icons>
        </view>
        <view class="item">
          <span>备注：</span>
          <input class="uni-input" type="text" placeholder="备注" v-model="baseInfo.some"/>
        </view>
      </view>
      <!-- 添加照片 -->
      <view class="imgBox">
        <view class="item" >
          <view class="item-img" @click="choseImage_before">
            <view class="uni-uploader__input" ></view>
            <view class="preshow">
              <image v-for="(value,index) in imageList_before" :src='value' :key="index" class="imgs"></image>
            </view>
          </view>
          <view class="item-title">安装前</view>
        </view>
        <view class="item" >
          <view class="item-img" @click="choseImage_middle">
            <view class="uni-uploader__input" ></view>
            <view class="preshow">
              <image v-for="(value,index) in imageList_middle" :src='value' :key="index" class="imgs"></image>
            </view>
          </view>
          <view class="item-title">安装中</view>
        </view>
        <view class="item" >
          <view class="item-img" @click="choseImage_after">
            <view class="uni-uploader__input" ></view>
            <view class="preshow">
              <image v-for="(value,index) in imageList_after" :src='value' :key="index" class="imgs"></image>
            </view>
          </view>
          <view class="item-title">安装后</view>
        </view>
      </view>
      <button class="btn_sub" type="primary" @click='redirectTo'>提交</button>
     </form>
    </view>
  </view>
</template>

<script>
import uniIcons from '../../components/uni-icons/uni-icons'
export default {
  data() {
    return {
      baseInfo:{
        name:'',
        adress:'',
        some:'',
      },
      imageList_before: [],
      imageList_middle:[],
      imageList_after:[]
    };
  },
  components: {uniIcons},
  onLoad() {
  },
  methods: {
    choseImage_before() {
      uni.chooseImage({
        count: 1, //默认9
        success:res=>{
          this.imageList_before = res.tempFilePaths
        }
      })
    },
    choseImage_middle() {
      uni.chooseImage({
        count: 1, //默认9
        success:res=>{
          this.flag = false
          this.imageList_middle = res.tempFilePaths
        }
      })
    },
    choseImage_after() {
      uni.chooseImage({
        count: 1, //默认9
        success:res=>{
          this.flag = false
          this.imageList_after = res.tempFilePaths
        }
      })
    },
    // 预览照片
    previewImage: e =>{
      var current = e.target.dataset.src
      uni.previewImage({
        current: current,
        urls: this.imageList
      })
    },
    // 获取当前地址
    getAddress(){
      uni.chooseLocation({
        success: res => {
          this.baseInfo.adress = res.address
        }
      });
    },
    redirectTo() {
      // console.log('hello');
      uni.redirectTo({
         url: '/pages/navigator/sucess'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  .title {
    width:100%;
    height: 50px;
    font-size: 23px;
    line-height: 50px;
    color: #8f8f94;
    background-color: #636369;
    text-align: center;

  }
  .form {
    width: 90%;
    margin: 10px auto;
    .base-info {
      margin-top: 20px;
      border: 1px solid #eee;
      border-radius: 10px;
      box-shadow: 0 0 10px rgb(172, 170, 170);
      background-color: #fff;
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
        position: relative;
        span {
          display: inline-block;
          width: 60px;
          height: 30px;
          line-height: 30px;
          text-align: right;
          margin-right: 10px;
        }
        .uni-input {
          display: inline-block;
          border-bottom: 1px groove;
          width: 240px;
          height: 30px;
          padding-left: 8px;
          font-size: 14px;
          // border-radius: 10px 10px 10px 10px;
        }
       .uni-icons{
         span{
           right: 20px;
         }
       }
      }
    }
    .imgBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 30px 0;
      .item {
        width: 100px;
        height: 150px;
       .item-img {
          position: relative;
          width: 100px;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2rpx solid #D9D9D9;
          &::before,&::after{
            content: " ";
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background-color: #D9D9D9;
          }
          &::before{
            width: 4rpx;
            height: 79rpx;
          }
          &::after{
            width: 79rpx;
            height: 4rpx;
          }
          &:active{
            border-color: #999999;
            &::before,&::after{
              background-color: #999999;
            }
          }
          .preshow{
            .imgs{
              &:first-child{
                width:100px;
                height:100px;
              }
            }
          }
       }
       .item-title {
          text-align: center;
		  margin-top: 10px;
          font-weight: 500px;
        }
       }
    }  
    .btn_sub{
      width:90%;
      margin-top: 60px;
    }
  }
}
</style>  
