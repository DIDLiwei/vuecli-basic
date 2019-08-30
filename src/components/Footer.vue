// 只能拥有一个标签
<template>
  <footer>
    <p>{{copyright}} {{title.name}}</p>
  </footer>
</template>

<script>
export default {
  name: "mr-footer",
  props: {
    title: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      copyright: "Copyright 2019 Vue Footer"
    };
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>
