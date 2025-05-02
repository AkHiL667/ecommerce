import React, { useContext } from "react";
import Nav from "./Nav";
import { Link, useNavigate, useParams } from "react-router-dom";
import { userContext } from "../utils/Context";
import Loading from "./Loading";

function Category() {
  const reqCategory = useParams();
  const [val] = useContext(userContext);
  let filterCategory = val.filter((item) => {
    return item.category === reqCategory.name;
  });
  return val ? (
    <>
      <Nav />
      <div className="h-screen p-10 w-[85%] p-3 flex flex-wrap overflow-x-hidden overflow-y-auto gap-5 ">
        {filterCategory.map((item, index) => {
          return (
            <Link
              key={item.id}
              to={`/userdetails/${item.id}`}
              className="card shadow rounded p-3 flex flex-col justify-center w-50 h-60 bg-white"
            >
              <div
                style={{
                  backgroundImage: ` url("${item.image}")`,
                }}
                className="hover:scale-105 w-40 h-40 bg-contain bg-no-repeat bg-center"
              ></div>
              <h1 className="text-md mt-3 font-semibold ">{item.title}</h1>
              <h1 className="font-semibold text-red-500">${item.price}</h1>
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Category;
