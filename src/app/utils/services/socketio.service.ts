import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket!: Socket;

  constructor() {
    this.connect();
  }

  private connect(): void {
    this.socket = io('http://localhost:3000'); // Reemplaza la URL con la dirección de tu servidor Socket.IO

    this.socket.on('connect', () => {
      console.log('Conectado al servidor Socket.IO');
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor Socket.IO');
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  emit(eventName: string, data: any): void {
    if (this.socket) {
      this.socket.emit(eventName, data);
    }
  }

  on(eventName: string, callback: (...args: any[]) => void): void {
    if (this.socket) {
      this.socket.on(eventName, callback);
    }
  }
}
