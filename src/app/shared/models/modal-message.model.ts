export class ModalMessageModel {
  public withCancelButton = false;
  public withSaveButton = false;
  public message = 'Message example';

  constructor(withCancelButton: boolean, withSaveButton: boolean, message: string) {
    this.withCancelButton = withCancelButton;
    this.withSaveButton = withSaveButton;
    this.message = message;
  }
}
