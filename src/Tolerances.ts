import ITolerances from "./ITolerances";
import { ITolerance } from "@deboertool/vo-tolerance";

export default class Tolerances implements ITolerances 
{
  constructor (private _upper: ITolerance, private _lower: ITolerance) {}

  upper (): ITolerance 
  {
    return this._upper
  }

  lower (): ITolerance 
  {
    return this._lower
  }

  value(): string 
  {
    return this.toString()
  }

  toString(): string 
  {
    return `${this._upper.toString()}/${this._lower.toString()}`
  }
}
