const products = [
    {id: 1, title:'anillo', category:'anillos', description:'string', price:'100', pictureURL:'https://pandoraar.vtexassets.com/arquivos/ids/250275/198289CZ_1.png?v=637649430045300000', stock:'number'},
    {id: 2, title:'pulcera', category:'pulceras', description:'string', price:'100', pictureURL:'https://pandoraar.vtexassets.com/arquivos/ids/256607/590719_1.png?v=637649487882300000', stock:'number'},
    {id: 3, title:'aro', category:'aros', description:'string', price:'100', pictureURL:'https://pandoraar.vtexassets.com/arquivos/ids/248182/280688CZ_1.png?v=637649409845300000', stock:'number'},
    {id: 4, title:'anillo2', category:'anillos', description:'string', price:'100', pictureURL:'https://pandoraar.vtexassets.com/arquivos/ids/275178/189057C01_1.png?v=637853093578530000', stock:'number'},
  ]

export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(products);
      }, 2000)
    })
    return promise
  };

  export const getAllProduct = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === id)
      setTimeout(() => {
        return resolve(products);
      }, 2000)
    })
    return promise
  };

  export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === parseInt(id))
      setTimeout(() => {
        return resolve(result);
      }, 2000)
    })
  
    return promise
  };

  export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
      const results = products.filter((product) => product.category === categoryId);
      setTimeout(() => {
        return resolve(results);
      }, 2000)
    })
  
    return promise
  };