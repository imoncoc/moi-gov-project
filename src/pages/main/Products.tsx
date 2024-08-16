import { ArrowRightOutlined } from "@ant-design/icons";
import { products } from "./product";

const Products = () => {
  console.log(products);
  return (
    <div className="grid grid-cols md:grid-cols-2 gap-6 my-10">
      {products.map((data) => (
        <div className="flex flex-row gap-8 shadow-md p-4 ">
          <img className="size-28" src={data?.img} alt="" />
          <div>
            <p className="text-xl mb-3 text-slate-700">{data?.title}</p>
            {data?.items.map((item) => (
              <div className="flex gap-4 text-sm text-wrap">
                <p>
                  <ArrowRightOutlined className="text-lime-500" />
                </p>
                <p className="text-slate-500">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
