var indexControl = require('../control/indexControl')

test('getProducts(): have to  author', async () => {
    expect.assertions(1)
    let resp = await indexControl.getProducts('')
    return expect(resp.author.name + ' ' + resp.author.lastname).toEqual('Jonatan Alexander Rojas Ramirez')
})

test('getProductInfo(): have to  author', async () => {
    expect.assertions(1)
    let resp = await indexControl.getProductInfo('')
    return expect(resp.author.name + ' ' + resp.author.lastname).toEqual('Jonatan Alexander Rojas Ramirez')
})

test('getProductInfo(): response json when pass bad productId', async () => {
    expect.assertions(1)
    let r = await indexControl.getProductInfo('-ñ')
    return expect(r).not.toBeNull()
})

test('getProducts(): response json when pass bad query', async () => {
    expect.assertions(1)
    let r = await indexControl.getProducts('-ñ')
    return expect(r).not.toBeNull()
})