import { ITolerance, EmptyTolerance } from '@deboertool/vo-tolerance'
import { ITolerances } from '../'

export default class Tolerances implements ITolerances 
{
  upper (): ITolerance 
  {
    return new EmptyTolerance()
  } 

  lower (): ITolerance 
  {
    return new EmptyTolerance()
  }

  value (): string 
  {
    return this.toString()
  }

  toString (): string 
  {
    return ''
  }
}
