<template>
  <Tutorial />
</template>

<script>
import socket from '@/plugins/socketio.js'
export default {
  data () {
    return {}
  },
  created () {
    // eslint-disable-next-line no-console
    console.log(socket)
  }
}
</script>
