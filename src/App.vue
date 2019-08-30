<template>
  <div id="app">
    <!-- 这里的click不是普通的click -->
    <mr-header :title="title" @click="updateTitle" />
    <Users :users="users" />
    <Users :users="users" />
    <mr-footer :title="title" />
  </div>
</template>

<script>
// 组件内嵌套组件
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";

// 传值 和 传址

export default {
  name: "app",
  data() {
    return {
      users: [
        { name: "佩奇", position: "小猪", show: false },
        { name: "苏西", position: "小羊", show: false },
        { name: "瑞贝卡", position: "小兔", show: false },
        { name: "丹尼", position: "小狗", show: false },
        { name: "佩德罗", position: "小马", show: false },
        { name: "苏宜", position: "斑马", show: false }
      ],
      title: { name: "这是传值" }
    };
  },
  components: {
    // Users:Users
    Users,
    // users: Users
    "mr-header": Header,
    "mr-footer": Footer
  },
  methods: {
    updateTitle(name) {
      this.title.name = name;
    }
  }
};
</script>

<style scoped>
h1 {
  color: chartreuse;
}
</style>
