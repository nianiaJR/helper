import { debounce } from '../src/function'

describe('test all the functions', () => {
  it('debounce work right', done => {
    let count = 0;
    const counting = () => {
      count++
    }

    const debouncedCount = debounce(counting, 100)
    Array(10).fill(1).forEach(() => {
      debouncedCount()
    })

    setTimeout(() => {
      expect(count).toBe(1)
      done()
    }, 100)
  })
})