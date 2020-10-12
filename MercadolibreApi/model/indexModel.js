var axios = require('axios').default

let urls = {
  productList: encodeURI('https://api.mercadolibre.com/sites/MLA/search?q=​:'),
  productInfo: 'https://api.mercadolibre.com/items/',
  productDescription: 'https://api.mercadolibre.com/items/'
}

const indexModel = {
  getProducts: async (query) => {
    try {
      return await axios.get(`${urls.productList}${query.q}`)
    } catch (error) {
      return error
    }
  },
  getProductInfo: async (productId) => {
    try {
      let productDetail = await axios.get(encodeURI(`${urls.productInfo}${productId}`))
      let productDescription = await axios.get(encodeURI(`${urls.productDescription}${productId}/description`))
      return {
        productDetail,
        productDescription
      }
    } catch (e) {
      return e
    }
  }
}

module.exports = indexModel