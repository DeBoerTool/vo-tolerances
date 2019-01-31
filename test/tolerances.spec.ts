import { Tolerance } from '@deboertool/vo-tolerance'
import { Precision } from '@deboertool/vo-precision'
import { Factory } from '@deboertool/vo-unit'
import { expect } from 'chai'
import Tolerances from '../'

const unit = new Factory().make('mm')
const precision = new Precision(2)

const upper = new Tolerance(12, precision, unit)
const lower = new Tolerance(15.15, precision, unit)

const vo = new Tolerances(upper, lower)

describe('Tolerances', () => {
  it(
    'gets the upper tolerance', 
    () => expect(vo.upper()).to.eql(upper)
  )
  
  it(
    'gets the lower tolerance', 
    () => expect(vo.lower()).to.eql(lower)
  )

  it(
    'returns the value as a formatted string',
    () => expect(vo.value()).to.equal('+12mm/+15.15mm')
  )
})