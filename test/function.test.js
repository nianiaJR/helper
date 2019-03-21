import { debounce, throttle } from '../src/function'

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

  it('throttle work right', done => {
    let count = 0;
    let times = 0;
    const counting = () => {
      count ++
    }

    const throttledCount = throttle(counting, 0)
    Array(10).fill(1).forEach(() => {
      throttledCount()
    })

    setTimeout(() => {
      expect(count).toBeGreaterThan(0)
      expect(count).toBeLessThan(10)
      done()
    }, 2000)

  })
})