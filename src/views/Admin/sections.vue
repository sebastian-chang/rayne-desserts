<template>
  <h1>ADMIN SECTION PAGE</h1>
  <p>What would you like to edit?</p>

</template>

<script>
import {onMounted} from 'vue'
// import { addCollectionAndDocuments} from '../../firebase/config'
import { STORE_DATA } from '../../../mock/store-data'
export default {
  setup() {
    onMounted(async () => {
      console.log('>>>MOUNTED FLAVORS', STORE_DATA[0])
      // await addCollectionAndDocuments('flavors', STORE_DATA[0])
      // await addCollectionAndDocuments('menu', STORE_DATA[3])
      // await addCollectionAndDocuments('faq', STORE_DATA[2])
    })
  }

}
</script>

<style lang="sass" scoped>

</style>
