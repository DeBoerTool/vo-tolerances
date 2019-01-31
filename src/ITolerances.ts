import { ITolerance } from '@deboertool/vo-tolerance'
import ValueObject from '@deboertool/value-object-interface'

export default interface ITolerances extends ValueObject<string>
{
  upper (): ITolerance
  lower (): ITolerance
  toString (): string
}