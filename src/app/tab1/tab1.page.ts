import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public toastController: ToastController) {}
  async scheduleAppointment() {
    const toast = await this.toastController.create({
      message: 'Your appointment has been successfully scheduled.',
      duration: 2000,
      color: 'medium' // Changed to a less bright color to fit the dark theme
    });
    toast.present();
  }

}
