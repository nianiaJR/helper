import { updateQueryStringParameter } from '../src/string'

describe('updateQueryStringParameter', () => {
    const key = 'test'
    const value = 'hello-world'
    it('http://10.10.108.18:8003/test', () => {
        const querystring = 'http://10.10.108.18:8003/test'
        const updatestring = updateQueryStringParameter(querystring, key, value)
        expect(updatestring).toEqual(`${querystring}?${key}=${value}`)
    })

    it('http://10.10.108.18:8003/test?test=test', () => {
        const querystring = 'http://10.10.108.18:8003/test?test=test'
        const updatestring = updateQueryStringParameter(querystring, key, value)
        expect(updatestring).toEqual(`http://10.10.108.18:8003/test?${key}=${value}`)
    })

    it('http://10.10.108.18:8003/test?any=value', () => {
        const querystring = 'http://10.10.108.18:8003/test?any=value'
        const updatestring = updateQueryStringParameter(querystring, key, value)
        expect(updatestring).toEqual(`${querystring}&${key}=${value}`)
    })

    it('http://10.10.108.18:8003/test#any=value', () => {
        const querystring = 'http://10.10.108.18:8003/test#any=value'
        const updatestring = updateQueryStringParameter(querystring, key, value)
        expect(updatestring).toEqual(`http://10.10.108.18:8003/test?${key}=${value}#any=value`)
    })

    it('http://10.10.108.18:8003/test?xxx=value#any=value', () => {
        const querystring = 'http://10.10.108.18:8003/test?xxx=value#any=value'
        const updatestring = updateQueryStringParameter(querystring, key, value)
        expect(updatestring).toEqual(`http://10.10.108.18:8003/test?xxx=value&${key}=${value}#any=value`)
    })
})