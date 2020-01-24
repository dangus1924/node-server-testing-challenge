const colorModel = require('./color-model')
const db = require('../database/db-config')

beforeEach(async () => {
    await db.seed.run()
  })

describe('color model', () => {
    test('findById', async () => {
        const res = await colorModel.findById(1)
        expect(res.color).toBe('blue')
        
    })

    test('add new color', async () => {
        await colorModel.add({ color: 'black'})
        const color = await db('color').select()
        expect(color).toHaveLength(4)
    })
    test('update color', async () => {
        await colorModel.update(1, {color: 'green'})
        const color = await colorModel.findById(1)
        expect(color.color).toBe('green')
    })

    test('remove color', async () => {
        await colorModel.destroy(1)
        const color = await colorModel.list()
        expect(color).toHaveLength(2)
    })
})