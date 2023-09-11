import { products } from "@/data/products";

export default function handler(req, res) {
  const { id } = req.query;
  const singleProduct = products.find((item) => item.id === parseInt(id));
  if (req.method === "GET") {
    return res.status(200).json(singleProduct);
  } else if (req.method === "DELETE") {
    const productIndex = products.findIndex((item) => item.id === parseInt(id));
    products.splice(productIndex, 1);
    res.status(200).json(productIndex);
  } else if (req.method === "PATCH") {
    singleProduct.title = req.body.title;
    res.status(200).json(singleProduct);
  }
}
