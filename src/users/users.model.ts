export class User {
  protected id: number;
  protected title: string;
  protected body: string;

  public constructor(id: number, title: string, body: string) {
    this.id = id;
    this.title = title;
    this.body = body;
  }

  //#region Getters
  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getBody(): string {
    return this.body;
  }
  //#endregion

  //#region Setters
  public setTitle(title: string): void {
    this.title = title;
  }

  public setBody(body: string): void {
    this.body = body;
  }

  public setId(id: number): void {
    this.id = id;
  }

  //#endregion
}
