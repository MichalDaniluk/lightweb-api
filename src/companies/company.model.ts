export class Company {
  protected id: number;
  protected name: string;
  protected projects: number[];

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
