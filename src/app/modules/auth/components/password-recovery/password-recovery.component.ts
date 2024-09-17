import { Component } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { PasswdRecoveryForm } from '../../../core/models/forms.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
})
export class PasswordRecoveryComponent {
  passwdRecoveryForm: FormGroup<PasswdRecoveryForm> =
    this.formService.initPasswdRecoveryForm();

  constructor(private formService: FormService) {}

  getErrorMessage(email: FormControl<string>) {
    return this.formService.getErrorMessage(email);
  }
}
