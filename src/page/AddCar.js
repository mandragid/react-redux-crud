import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd } from "../redux/actions/carAction";
import rootReducers from "../redux/reducers";

const AddCar = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((rootReducers) => rootReducers);

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
    console.log(price);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleRedirect = () => {
    setTimeout(() => {
      if (state.carlist.message === "Created") {
        navigate("/discovery");
      }
    }, 2000);
  };

  useEffect(() => {
    handleRedirect();
  }, [state.carlist.message]);

  const HandleCreate = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("status", false);

    dispatch(handleAdd(formData));
    // axios
    //   .post(API.POST_ADMIN_CAR, formData, config)
    //   .then((res) => {
    //     navigate("/discovery");
    //     console.log("berhasil input");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <div>
      <input onChange={handleName} placeholder="Name" />
      <input onChange={handleCategory} placeholder="tipe mobil" />
      <input onChange={handlePrice} placeholder="Harga" />
      <input onChange={handleImage} type="file" />
      <button>
        <Link to="/discovery">Cancel</Link>
      </button>
      <button onClick={HandleCreate}>Save</button>
    </div>
  );
};

export default AddCar;
