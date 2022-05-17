<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="default_layout_content container" v-if="!isLoading">
      <div class="paginated_list">
        <ul class="menu_list">
          <li
            class="category_list_item"
            v-for="item in filtered.items"
            :key="item.id"
          >
            <MenuItem :item="item" :cat="cat" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from '@vue/reactivity'
import { onMounted, } from '@vue/runtime-core'
import MenuItem from '../components/MenuItem.vue'
import { projectFirestore } from '../firebase/config'
export default {
  components: { MenuItem },
  props: ['cat'],
  setup (props) {
    const state = reactive({
      menu: null,
    })
    const isLoading = ref(true)

    onMounted(async () => {
      const res = await projectFirestore.collection('menu').get()
      state.menu = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      isLoading.value = false
    })

    const filtered = computed(() => {
      if (props.cat !== 'all') {
        return state.menu.filter(item => item.category === props.cat)[0]
      }
      else {
        return { items: [].concat.apply([], state.menu.map(menu => menu.items)) }
      }
    }
    )
    return { state, isLoading, filtered }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .paginated_list > .menu_list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-flow: row;
    grid-gap: 2rem;
    background-color: #fff;
    margin-left: 0;
    margin-right: 0;

    padding-left: 3vw;
    padding-right: 3vw;
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

  .menu_list > li:nth-child(n) {
    margin: 0;
    float: none;
    width: auto;
    border: none;
  }

  @media screen and(min-width: 576px) {
    .paginated_list > .menu_list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and(min-width: 992px) {
    .paginated_list > .menu_list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
