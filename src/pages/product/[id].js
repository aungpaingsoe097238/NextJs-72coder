import { products } from "@/data/products";

function Product({ product }) {
  return <div>{product.title}</div>;
}

export default Product;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;
  const product = products.find((product) => product.id === parseInt(id));
  return {
    props: {
      product,
    },
  };
}
