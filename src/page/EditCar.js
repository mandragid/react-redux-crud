import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import rootReducers from "../redux/reducers";
import { handleGetCarId } from "../redux/actions/carAction";

const EditCar = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [carData, setCarData] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const state = useSelector((rootReducers) => rootReducers);
  console.log(state);
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
  const getData = () => {
    dispatch(handleGetCarId(id));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleEdit = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("status", false);

    // axios
    //   .put(
    //     `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
    //     formData,
    //     config
    //   )
    //   .then((res) => {
    //     console.log("edit berhasil");
    //     navigate("/discovery");
    //   })
    //   .catch((err) => {
    //     console.log("gagal edit");
    //   });
  };

  return (
    <div>
      {Object.entries(carData).length ? (
        <div>
          <input
            onChange={handleName}
            defaultValue={state.carlist.carid.name}
          />
          <input
            onChange={handleCategory}
            defaultValue={state.carlist.carid.category}
          />
          <input
            onChange={handlePrice}
            defaultValue={state.carlist.carid.price}
          />
          <input
            onChange={handleImage}
            type={"file"}
            placeholder={state.carlist.carid.image}
          />
          <button>
            <Link to="/discovery">Cancel</Link>
          </button>
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : null}
    </div>
  );
};

export default EditCar;
