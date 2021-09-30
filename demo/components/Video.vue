<template>
  <div class="flex justify-center mt-10">
    <video id="myVideo" width="400" controls>
      <source src="~/assets/videos/mov_bbb.mp4" type="video/mp4">
      <source src="~/assets/videos/mov_bbb.mp4" type="video/ogg">
      Your browser does not support HTML video.
    </video>
  </div>
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
  },
  mounded () {
    console.log('this')
    // play self video
    const vid = document.getElementById('myVideo')
    vid.onplay = () => {
      console.log('The video has started to play')
    }
    vid.onpause = () => {
      console.log('The video was paused')
    }
  }
}
</script>
