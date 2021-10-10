# mediasocket
Share media events over a websocket connection

## What to see it in action?
Check on our DEMO

Focus on your frontend code and the websocket takes care of the rest for you :)

## Technologies
 - socket.io client and server-side
 - nodejs

### Establishing a socket connection
use the <code> createRoom</code> event to create a room and pass room name as param to the event. To listen to if the room has been created you can use the
<code> createRoomStatus</code> which returns a message!
```javascript

    // function to setup connection
    establishSocketConnection () {
      // sending the create room event to the server alongside the room name to be created
      // create room
      socket.emit('createRoom', roomName)
      // receiving info from backend about created room status
      socket.on('createRoomStatus', (message) => {
        console.log(message)
      })
    }
```

## Video elements
List of the events to be handled here: https://www.w3.org/2010/05/video/mediaevents.html

## I - Done!
Events that are currently implemented!
- [x] play / pause
    - ## Event listeners on the front-end
     ```javascript
        // on play from server
        socket.on('playing', (message) => {
          console.log(message)
          // do code which plays video
          video.play()
        })
        // on pause from server
        socket.on('paused', (message) => {
          console.log(message)
          // do code which pause video
          video.pause()
        })
     ```

## II - Working on


## Audio elements
Coming soon!

### Why am i building this?
I noticed instead of streaming a madia element with technologies like WebRTC, i could just share event via a socket connection. Also to learn and master websockets
