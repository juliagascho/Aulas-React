import { ProductCard } from "../Product/Product";

import imageMusic1 from "../../assets/images/1.png";
import imageMusic2 from "../../assets/images/2.png";
import imageMusic3 from "../../assets/images/3.png";
import "./ProductList.css";


export function ProductList() {
  return (         
        <>
            <ProductCard image={imageMusic1} title="5GB" valor="Node e Modules" ></ProductCard>
            <ProductCard image={imageMusic1} title="5GB" valor="Node e Modules" ></ProductCard>
            <ProductCard image={imageMusic1} title="5GB" valor="Node e Modules" ></ProductCard>
            <ProductCard image={imageMusic1} title="5GB" valor="Node e Modules" ></ProductCard>
            
        </>
  );
}