<template>
        <span :title="timestamp | readableDate">{{ timestamp | dateDifference}}</span>       
</template>
<script>
import moment from 'moment'
export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  filters: {
    readableDate (date) {
      return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    dateDifference (date) {
      return moment.unix(date).fromNow()
    }
  }
}
</script>