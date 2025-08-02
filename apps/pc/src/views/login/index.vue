<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 4 }"
    :label-align="'left'"
    :wrapper-col="{ span: 16 }"
    :style="{ maxWidth: '600px' }"
    @finish="onFinish"
  >
    <a-form-item label="用户名" name="username">
      <a-input v-model:value="formState.username" />
    </a-form-item>
    <a-form-item label="密码" name="password">
      <a-input v-model:value="formState.password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">登录</a-button>
      <a-button type="primary" html-type="submit">取消</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const formState = reactive({
  username: '',
  password: '',
});

const onFinish = (values: any) => {
  console.log(values);
};
</script>
