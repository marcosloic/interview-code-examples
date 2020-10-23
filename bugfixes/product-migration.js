/*
The annual price increasement needs to be done and we have written a script to migrate a product.
An object needs to be returned with the old product and the new migrated product for pricing history records.
All prices need to raised by 15% and the deposit of bottles is increased from $0.15 to $0.20.
During the tests the old product seems to be the new product as well. Something is not working like expected.
 */

function migrateProduct(oldProduct) {
    const newProduct = oldProduct
    newProduct.price *= 1.15
    newProduct.containers = newProduct.containers.map((container => {
        if (container.type === 'bottle') {
            container.deposit = 0.20
        }
        return container
    }))

    return { oldProduct, newProduct }
}

const res = migrateProduct({
        product: "Milk",
        price: 1.2,
        containers: [
            {type: "bottle", deposit: 0.15, liters: 1.5},
            {type: "can", deposit: 0.1, liters: 0.33},
            {type: "carton", deposit: null, liters: 1}
        ]
    }
)

console.log(res.oldProduct.containers, res.newProduct.containers)
