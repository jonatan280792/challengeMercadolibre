var indexModel = require('../model/indexModel');
let responseParsed = {}
responseParsed.author = {
  name: "Jonatan Alexander",
  lastname: "Rojas Ramirez"
}
const controlFunctions = {
  getProducts: async (q) => {
    try {
      let response = await indexModel.getProducts(q)
      responseParsed.categories = response.data.available_filters[0].values.map((category) => {
        return category.name
      })
      responseParsed.items = response.data.results.map((item) => {
        var priceSplitted = ('' + item.price).split('.')
          return {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: +priceSplitted[0],
              decimals: +priceSplitted[1]
            },
            city_name: item.address.city_name,
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping
          }
        })
        return responseParsed
    } catch (error) {
      return error
    }
  },
  getProductInfo: async (productId) => {
        try {
            let response = await indexModel.getProductInfo(productId)
            if (response.productDetail.status !== 404) {
                var priceSplitted = ('' + response.productDetail.data.price).split('.')
                responseParsed.item = {
                    id: response.productDetail.data.id,
                    title: response.productDetail.data.title,
                    price: {
                        currency: response.productDetail.data.currency_id,
                        amount: +priceSplitted[0],
                        decimals: +priceSplitted[1]
                    },
                    picture: response.productDetail.data.thumbnail,
                    condition: response.productDetail.data.condition,
                    free_shipping: response.productDetail.data.shipping.free_shipping,
                    sold_quantity: response.productDetail.data.sold_quantity,
                    description: response.productDescription.data.plain_text
                }
            }
            return responseParsed
        } catch (error) {
            return error
        }
    }
}

module.exports = controlFunctions;