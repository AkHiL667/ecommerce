import React, { useState } from "react";

function Create() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <h1 className=" w-screen pt-15 text-4xl font-bold text-center  ">
        Add product
      </h1>
      <form className="flex flex-col items-center w-screen pt-10 " action="">
        <input
          className=" w-130 p-2 h-13 bg-zinc-100 "
          type="text"
          placeholder="enter product name"
          onChange={(e) => setName(e.target.value)}
          value={name}
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
      </form>
    </div>
  );
}

export default Create;
