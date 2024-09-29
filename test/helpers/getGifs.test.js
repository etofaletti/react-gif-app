import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => { 
    test('Debe de retornar un areglo de gifs', async() => { 
        const gifs = await getGifs('River Plate');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})