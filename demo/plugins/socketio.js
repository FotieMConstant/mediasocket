// plugin for websocket connection
import io from 'socket.io-client'
// add http://localhost:5000 if you want to run the websocket server locally
const socket = io('http://localhost:5000', { transports: ['websocket'] })
// const socket = io('bond-websockets.glitch.me', { transports: ['websocket'] });
export default socket
