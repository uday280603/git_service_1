import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarServiceService {

  constructor(private snackbarService:MatSnackBar) { }
  sanckbar(msg:string){
    this.snackbarService.open(msg,'close',{
      duration:3000,
      verticalPosition:'bottom',
      horizontalPosition:'center'
    })
  }
}
