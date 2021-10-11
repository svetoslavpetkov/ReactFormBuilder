export interface IProperty {
  get value(): string;
  setValue(value: string): void;
  get isValid(): boolean;
}

export class Property {

}