import { EmptyTolerances } from '../'
import { expect } from 'chai'
import { EmptyTolerance } from '@deboertool/vo-tolerance';

const vo = new EmptyTolerances()

describe('Empty Tolerances', () => {
  it('returns empty tolerance objects', () => {
    expect(vo.upper()).to.be.instanceOf(EmptyTolerance)
    expect(vo.lower()).to.be.instanceOf(EmptyTolerance)
  })

  it('returns empty strings', () => {
    expect(vo.toString()).to.equal('')
    expect(vo.value()).to.equal('')
  })

})