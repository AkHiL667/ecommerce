import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { userContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";


function Create() {
  const [val, setVal] = useContext(userContext)
  const navigate = useNavigate()
  const [title, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  let submitAction = (e) => {
    e.preventDefault();
    if (
      title.trim().length <= 5 ||
      image.trim().length <= 5 ||
      category.trim().length <= 5 ||
      description.trim().length <= 5 ||
      price.trim().length <= 1
    ) {
      alert("Please fill out every field with correct details.");
      return;
    }
    const newProductData = {
      id : nanoid(),
      title,
      image,
      price,
      category,
      description,
    };
    setVal ([...val,newProductData])

    localStorage.setItem(
      "val", JSON.stringify([...val,newProductData]))
    console.log(newProductData)
    navigate("/")
  };

  return (
    <div>
      <h1 className=" w-screen pt-15 text-4xl font-bold text-center  ">
        Add product
      </h1>
      <form
        onSubmit={submitAction}
        className="flex flex-col items-center w-screen pt-10 "
        action=""
      >
        <input
          className=" w-130 p-2 h-13 bg-zinc-100 "
          type="text"
          placeholder="enter product name"
          onChange={(e) => setName(e.target.value)}
          value={title}
        />
        <input
          className=" mt-5 w-130 p-2 h-13 bg-zinc-100 "
          type="text"
          placeholder="enter image url"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <div className="w-130 flex gap-5">
          <input
            className=" mt-5 w-130 p-2 h-13 bg-zinc-100 "
            type="number"
            placeholder="enter price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />

          <input
            className=" mt-5 w-130 p-2 h-13 bg-zinc-100 "
            type="text"
            placeholder="enter category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        <textarea
          className=" mt-5 w-130 p-2 h-33 bg-zinc-100 "
          type="text"
          placeholder="enter description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <div className=" w-130">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-3 rounded-md mt-5 py-[4px] self-center"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
