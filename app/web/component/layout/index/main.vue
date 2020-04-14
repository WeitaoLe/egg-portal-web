<template>
  <div class="main">
    <LayoutHeader></LayoutHeader>
    <LayoutContent>
      <div slot="content">
        <slot name="main"></slot>
      </div>
    </LayoutContent>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<style></style>
<script type="babel">
  import LayoutHeader from './header/header';
import LayoutFooter from './footer/footer';
import LayoutContent from './content/content';
export default {
  components: {
    LayoutHeader,
    LayoutContent,
    LayoutFooter
  }
};
</script>