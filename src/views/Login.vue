<template>
  <div class="login">
    <van-image
      class="image-user"
      round
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="login-form">
      <div class="login-form-item">
        <van-field
          class="login-form-item-field"
          v-model="username"
          placeholder="请输入用户名"
          size="large"
        />
      </div>
      <div class="van-hairline--top"></div>
      <div class="login-form-item">
        <van-field
          class="login-form-item-field"
          v-model="password"
          type="password"
          placeholder="请输入密码"
          right-icon="warning-o"
        />
      </div>
    </div>

    <div class="login-wx-btn">
      <van-button round plain block type="default" color="#ffffff"
        >使用 wechat 进行登录</van-button
      >
    </div>

    <div class="login-btn">
      <van-button block type="success" icon="play-circle-o">登录</van-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const onSubmit = values => {
      console.log("submit", values);
    };
    return {
      username,
      password,
      onSubmit
    };
  }
};
</script>

<style lang="less">
.login {
  flex-grow: 1;
  background-color: @main-color;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 1200px;
  overflow-y: auto;

  .image-user {
    width: 224px;
    height: 224px;
    margin-top: 100px;
  }

  .login-form {
    margin-top: 131px;
    width: 711px;
    height: 211px;
    border-radius: 20px;
    background: #ffffff;

    .login-form-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(50% - 0.5px);

      .login-form-item-field {
        width: 95%;
        height: 95%;

        .van-cell--large .van-cell__title {
          font-size: 50px;
        }
        .van-cell {
          font-size: 50px;
          line-height: 50px;
        }
      }
    }
  }

  .login-wx-btn {
    width: 500px;
    margin-top: 219px;

    .van-button--default {
      background-color: @main-color;
    }
  }

  .login-btn {
    width: 100%;
    height: 171px;
    position: fixed;
    bottom: 0;
    left: 0;

    .van-button {
      height: 100%;
    }
  }
}
</style>
