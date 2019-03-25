import { debounce, throttle, promiseAll } from '../src/function'

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

  it('promiseall resolve work right', done => {
    const p1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve(2)
      }, 200)
    })

    const p2 = new Promise((resolve) => {
      setTimeout(() => {
        resolve(3)
      })
    })

    promiseAll([p1, p2]).then((data) => {
      expect(data[0]).toBe(2)
      expect(data[1]).toBe(3)
      done()
    })
  })

  it('promiseall reject work right', done => {
    const p1 = new Promise((_, reject) => {
      setTimeout(() => {
        reject('error')
      }, 200)
    })

    const p2 = new Promise((resolve) => {
      setTimeout(() => {
        resolve(3)
      })
    })

    promiseAll([p1, p2]).catch((data) => {
      expect(data[0]).toBe('error')
      expect(data[1]).toBe(3)

      done()
    })
  })
})