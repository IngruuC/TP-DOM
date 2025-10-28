import type { Product } from "../types/poducts";

const products: Product[] = [
    {
        id: 1,
        name: "Producto 1",
        price: 3500,
        description: "Surtidas",
        image: "https://www.deliargentina.com/image/catalog/product/alimentacion/galletitas-terrabusi-variedad/galletitas-terrabusi-variedad.jpg"
    },
    {
        id: 2,
        name: "Rumba",
        price: 2300,
        description: "Descripción del producto 2",
        image: "https://arcorencasa.com/wp-content/uploads/2024/10/20241009-14352.webp"
    },
];

export const Products = () => {
    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <img src={product.image} alt={product.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}


