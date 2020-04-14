<template>
  <layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <div class="container">
      <div>首页main</div>
      <ul>
        <li v-for="item in listData">{{item.categoryName}}</li>
      </ul>
    </div>
    <div style="text-align:center" v-if="isLoading">
      <img src="../../asset/images/loading.gif" />
    </div>
  </layout>
</template>
<style lang="scss">
  @import 'index.scss';
</style>
<script type="babel">
  export default {
  components: {

  },
  data () {
    return {
      isFinish: false,
      isLoading: false,
      pageIndex: 1,
      pageSize: 10,
      title: '我是首页标题',
      listData: []
    }
  },
  computed: {
    lists () {
      return this.list;
    }
  },
  methods: {
    fetch () {
      this.$request.get(`/list`).then(res => {
        if(res.data.code === 0) {
          this.listData = res.data.datas
        }
        // if (res.data.list && res.data.list.length) {
        //   this.total = res.data.total;
        //   this.list = this.list.concat(res.data.list);
        // } else {
        //   this.isFinish = true;
        // }
        // this.isLoading = false;
      });
    },
    loadPage () {
      if (!this.isFinish && !this.isLoading) {
        this.isLoading = true;
        this.pageIndex++;
        setTimeout(() => {
          this.fetch();
        }, 1500);
      }
    }
  },
  mounted () {
    // window.addEventListener('scroll', () => {
    //   this.loadPage();
    // }, false);
    this.fetch()
  }
}
</script>