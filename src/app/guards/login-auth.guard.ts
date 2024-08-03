import { CanActivateFn } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  // return inject(ConnectionService).loginFlag;
  return true;
};
