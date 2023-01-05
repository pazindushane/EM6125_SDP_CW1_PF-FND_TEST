export class InputDialogConfig {
  dialogType: 'Update' | 'Add'| 'Price' ;
  title: string;
  fieldTxtOne: string;
  fieldTxtTwo: string | null;

  inputDataOne: string | null;
  inputDataTwo: string | null;


  constructor(dialogType: 'Update' | 'Add'| 'Price', title: string, fieldTxtOne: string, fieldTxtTwo: string | null,
              inputDataOne: string | null, inputDataTwo: string | null) {
    this.dialogType = dialogType;
    this.title = title;
    this.fieldTxtOne = fieldTxtOne;
    this.fieldTxtTwo = fieldTxtTwo;
    this.inputDataOne = inputDataOne;
    this.inputDataTwo = inputDataTwo;
  }
}
