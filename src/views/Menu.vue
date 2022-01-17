<template>
  <div class="default_layout_content" v-if="!isLoading">
    <div class="paginated_list">
      <ul class="menu_list category_grid">
        <li class="category_list_item" v-for="item in state.menu.brownies" :key="item.id">
          <MenuItem :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import MenuItem from '../components/MenuItem.vue'
export default {
  components: { MenuItem },
  setup () {
    const state = reactive({
      menu: null
    })
    const isLoading = ref(true)

    onMounted(async () => {
      const res = await fetch(`${process.env.VUE_APP_BASE_API}/menu`)
      const data = await res.json()
      state.menu = data[0]
      isLoading.value = false
    })

    return { state, isLoading }
  }
}
</script>

<style lang="scss" scoped>
.paginated_list > .menu_list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-gap: 2rem;
  background-color: #fff;
  // background: steelblue;
  margin-left: 0;
  margin-right: 0;

  padding-left: 3.33vw;
  padding-right: 3.33vw;
  box-sizing: border-box;
}
.menu_list {
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  list-style: none;
}
.category_grid {
  box-sizing: border-box;
  padding-left: 3.33333vw;
  padding-right: 3.33333vw;
  padding: 0;
}

.menu_list > li:nth-child(n) {
  margin: 0;
  float: none;
  width: auto;
  border: none;
  // background-color: pink;
  // background-color: #fff;
}
</style>
