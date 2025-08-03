<template>
  <div class="grid-container">
    <p>上中下布局</p>
    <div class="grid-container-1">
      <div class="grid-item-aside">aside</div>
      <div class="grid-item-header">header</div>
      <div class="grid-item-content">content</div>
      <div class="grid-item-footer">footer</div>
    </div>
    <p>圣杯布局</p>
    <div class="grid-container-2">
      <div class="grid-item-header">header</div>
      <div class="grid-item-nav">nav</div>
      <div class="grid-item-content">
        <p>content</p>
      </div>
      <div class="grid-item-aside">aside</div>
      <div class="grid-item-footer">footer</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.grid-container {
  height: calc(100% - 54px);
}
// 上下布局
.grid-container-1 {
  display: none;
  height: 100%;
  // display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100px 1fr 100px;
  .grid-item-aside {
    grid-row: 1 / span 3;
    background-color: antiquewhite;
  }
  .grid-item-header {
    background-color: azure;
  }
  .grid-item-content {
    background-color: chocolate;
    color: #fff;
  }
  .grid-item-footer {
    background-color: aquamarine;
  }
}
// 圣杯布局
.grid-container-2 {
  height: 100%;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: 100px 1fr 100px;

  .grid-item-header {
    background-color: azure;
    grid-column: 1 / span 3;
  }
  .grid-item-nav {
    background-color: antiquewhite;
  }
  .grid-item-content {
    background-color: chocolate;
    color: #fff;
  }
  .grid-item-aside {
    background-color: blueviolet;
  }
  .grid-item-footer {
    background-color: aquamarine;
    grid-column: 1 / span 3;
  }
}
</style>
