<template>
  <div class="container">
    <header>
      <ul>
        <li>首页</li>
        <li>解决方案</li>
        <li>分析报告</li>
        <li>关于易观</li>
      </ul>
    </header>
  </div>
</template>
<style lang="scss">
  @import './header.scss';
</style>

<script type="babel">
  export default {
  components: {},
  data() {
    return {
      collapsed: false
    };
  },
  computed: {},
  methods: {
    menuBtn() {
      this.collapsed = !this.collapsed;
    }
  },
  mounted() {}
};
</script>