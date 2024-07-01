import io from 'socket.io-client';
const SOCKET_URL = 'http://localhost:3000';
class WSService {
  initializeSocket = async () => {
    try {
      this.socket = io(SOCKET_URL, {
        transports: ['websocket'],
      });

      console.log('initialize Socket', this.socket);
      this.socket.on('connect', data => {
        console.log('-=-=Socket connected');
      });
      this.socket.on('disconnect', data => {
        console.log('-=-=Socket disconnected');
      });
      this.socket.on('error', data => {
        console.log('-=-=Socket error', data);
      });
    } catch (error) {
      console.log('socket is not initilaixe', error);
    }
  };
  emit(event, data = {}) {
    this.socket.emit(event, data);
  }
  on(event, data = {}) {
    this.socket.on(event, data);
  }
  removeListener(lName) {
    this.socket.removeListeneremit(lName);
  }
}
const socketServices = new WSService();
export default socketServices;
