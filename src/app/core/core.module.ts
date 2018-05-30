import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor , multi: true },
    ApiService,
    JwtService,
  ],
  declarations: []
})
export class CoreModule { }
