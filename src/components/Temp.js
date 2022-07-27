
export default function Temp() {

    const productId = ["ProductId"]
    const thingElements = productId.map(thing => <p key={thing}>{thing}</p>)

    function addItems() {
        const newProductId = `ProductId ${productId.length - 1}`
        productId.push(newProductId)
        console.log(productId)
    }

    function removeItems() {
        productId.splice(-1)
        console.log(productId)
    }

    return (
        <div>
            <button onClick={addItems}>Add ProductId</button>
            <button onClick={removeItems}>Remove ProductId</button>
            { thingElements }
        </div>
    )
}