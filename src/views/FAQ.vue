<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="faq">
      <div class="faq-section-wrapper">
        <h1 class="faq-main-title">Frequently Asked Questions</h1>
        <div class="faq-sections">
          <div v-if="!isLoading">
            <div
              class="faq-section"
              v-for="section in faqData.categories"
              :key="section.id"
            >
              <h2 class="faq-section-title">{{ section.category }}</h2>
              <Accordion :panes="section.questions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import { projectFirestore } from '../firebase/config'
import Accordion from '../components/Accordion.vue'
export default {
  components: { Accordion },
  setup () {
    const activeTab = ref(false)
    const isLoading = ref(true)
    const faqData = reactive({
      categories: null,
    })

    onMounted(async () => {
      const res = await projectFirestore.collection('faq').get()
      faqData.categories = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      isLoading.value = false
    })

    const openTab = () => {
      console.log('BEFORE', activeTab.value)
      activeTab.value = !activeTab.value
      console.log('AFTER', activeTab.value)
    }
    return { activeTab, openTab, isLoading, faqData }
  }

}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .faq {
    flex: 1 1 auto;
    width: 100%;
    padding: 3rem;
    box-sizing: border-box;
    padding-left: 6.4vw;
    padding-right: 6.4vw;
  }
  .faq-main-title {
    font-family: themed("serif-font");
    font-size: themed("faq-title-font-size");
    font-weight: 700;
    line-height: 1.05;
    text-transform: uppercase;
    border-bottom: 1px solid black;
    margin-bottom: 2rem;
  }
  .faq-sections {
    padding: 2rem;
    box-sizing: border-box;
  }
  // .faq-subsection-title {
  //   font-weight: 400;
  //   font-size: 1rem;
  //   line-height: 2;
  //   letter-spacing: 0.4px;
  //   box-sizing: border-box;
  //   padding: 1.5rem 0;
  //   background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%20focusable='false'%20aria-hidden='true'%20class='ui-icon-controls-close-inverted'%3E%3Cpath%20fill='%2319110b'%20fill-rule='evenodd'%20d='M48%2037V12h8v25h24v8H56v23h-8V45H24v-8h24z'/%3E%3C/svg%3E");
  //   background-size: 1rem 1rem;
  //   background-repeat: no-repeat;
  //   background-position: right center;
  //   border-bottom: 1px solid #eae8e4;
  // }
  // .faq-subsection-title.target-on,
  // .isActive {
  //   font-weight: 700;
  //   background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%20focusable='false'%20aria-hidden='true'%20class='ui-icon-controls-close-inverted'%3E%3Cpath%20fill='%2319110b'%20fill-rule='evenodd'%20d='M12%2036h56v8H12z'/%3E%3C/svg%3E");
  // }
}
</style>
