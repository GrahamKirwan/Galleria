import data from '../data.json'

export function getAllPaintingSlugs() {

    let paintingData = data;
    let paintingNames = paintingData.map((painting, key) => {
        return {id: key, slug: painting.name.replace(/\s+/g, '-').toLowerCase()}
    })

    return paintingNames.map((painting) => {
        return {
          params: painting,
        };
      });
}