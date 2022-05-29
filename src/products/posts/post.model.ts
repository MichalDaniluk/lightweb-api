export class Post {
  protected id: number;
  protected title: string;

  public constructor(title: string) {
    this.title = title;
  }

  //#region Getters
  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  //#endregion

  //#region Setters
  public setTitle(title: string): void {
    this.title = title;
  }

  public setId(id: number): void {
    this.id = id;
  }
  //#endregion
}
