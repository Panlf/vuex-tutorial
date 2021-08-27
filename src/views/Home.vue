<template>
  <div>
		<Addition></Addition>
		<hr>
		<Subtraction></Subtraction>
  </div>
</template>

<script>

import Addition from '@/components/Addition.vue'
import Subtraction from '@/components/Subtraction.vue'

export default {
  name: 'Home',
  components: {
    Addition,
	Subtraction
  },
  data(){
	  return {
		  
	  }
  }
}
</script>
