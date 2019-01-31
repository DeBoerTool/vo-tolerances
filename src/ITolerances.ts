import { ITolerance } from '@deboertool/vo-tolerance'

export default interface ITolerances
{
  upper (): ITolerance
  lower (): ITolerance
  value (): string
  toString (): string
}