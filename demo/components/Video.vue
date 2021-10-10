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
    return {
      socketConnectionName: 'room1'
    }
  },
  created () {
    // eslint-disable-next-line no-console
    console.log(socket)
  },
  mounted () {
    this.establishSocketConnection()

    // play self video
    const vid = document.getElementById('myVideo')
    vid.onplay = () => {
      // eslint-disable-next-line no-console
      console.log('The video has started to play')

      // speading onplay to channel
      socket.emit('play', this.socketConnectionName)
    }
    vid.onpause = () => {
      // eslint-disable-next-line no-console
      console.log('The video was paused')

      // speading onpause to channel
      socket.emit('paused', this.socketConnectionName)
    }

    // on play from server
    socket.on('playing', (message) => {
      console.log(message)
      // play video
      vid.play()
    })
    // on pause from server
    socket.on('paused', (message) => {
      console.log(message)
      // play video
      vid.pause()
    })
  },
  methods: {
    // function to setup connection
    establishSocketConnection () {
      console.log('Establishing Socket Connection with server...')
      console.log('socketConnectionName => ' + this.socketConnectionName)

      // sending the create room event to the server alongside the room name to be created
      // create room
      socket.emit('createRoom', this.socketConnectionName)
      // receiving info from backend about created room status
      socket.on('createRoomStatus', (message) => {
        console.log(message)
      })
    }
  }
}
</script>
