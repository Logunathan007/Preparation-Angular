import { CanActivateFn } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
import { HttpClient } from '@angular/common/http';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  // cs:ConnectionService = new ConnectionService()
  return true;
};
