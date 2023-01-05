export class ApprovalDialogConfig {
  dialogType: 'Alert' | 'Confirm' | 'Error' | 'Delete' | 'Fine';
  title = '';
  message = '';

  constructor(dialogType: 'Alert' | 'Confirm' | 'Error' | 'Delete' | 'Fine', title: string, message: string) {
    this.dialogType = dialogType;
    this.title = title;
    this.message = message;
  }
}
