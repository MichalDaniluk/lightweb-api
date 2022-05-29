export class Project {
  protected id: number;
  protected name: string;

  public constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  //#region Getters
  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  //#endregion

  //#region Setters
  public setName(name: string): void {
    this.name = name;
  }

  public setId(id: number): void {
    this.id = id;
  }
  //#endregion
}
