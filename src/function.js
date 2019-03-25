/**
 * 
 * @param {Function} fn  function which need to debounce
 * @param {Number} wait  how many milseconds waiting to call fn
 */

function debounce(fn, wait) {
    let timer;

    return function debounced(...rest) {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, rest);
        }, wait)
    }
}

function throttle(fn, interval, immediate) {
    let timer;

    return function throttled(...rest) {
        if (timer) {
            return;
        }
        if (immediate) {
            fn.apply(this, rest)
            return
        }
        timer = setTimeout(() => {
            timer = null
            fn.apply(this, rest)
        }, interval)
    }
}

function promiseAll(requests) {
    const arr = Array(requests.length);
    let right = 0;
    let error = 0;
    return new Promise((resolve, reject) => {
        requests.forEach((request, index) => {
            request.then(data => {
                arr[index] = data;
                right++;
            }, err => {
                arr[index] = err;
                error++;
            }).finally(() => {
                if (right + error === arr.length) {
                    if (right === arr.length) {
                        return resolve(arr)
                    }
                    return reject(arr)
                }
            })
        })
    })
}

export {
    promiseAll,
    debounce,
    throttle
}