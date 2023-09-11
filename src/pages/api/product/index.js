import { products } from "@/data/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ products: products });
  } else if (req.method === "POST") {
    const title = req.body.title;
    const newProduct = { id : Date.now(), title }
    products.push(newProduct);
    res.status(201).json(newProduct);
  }
}
