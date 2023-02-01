import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { handleCarList, handleDelete } from "../redux/actions/carAction";
import { Link } from "react-router-dom";

const Discovery = () => {
  const dispatch = useDispatch();
  const state = useSelector((rootReducers) => rootReducers);

  // console.log(state);

  const handleCarAction = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    dispatch(handleCarList(config));
  };

  useEffect(() => {
    handleCarAction();
  }, []);

  useEffect(() => {
    handleCarAction();
  }, [state.carlist.message]);

  const handleCarDelete = (id) => {
    dispatch(handleDelete(id));
  };

  return (
    <div>
      <Navbar />
      <button>
        <Link to="/addcar">Add Car</Link>
      </button>
      {state.carlist.carlist.length
        ? state.carlist.carlist.map((item) => {
            return (
              <div>
                <img src={item.image}></img>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.category}</p>
                <button onClick={() => handleCarDelete(item.id)}>Delete</button>
                <Link to={`/edit-car/${item.id}`}>
                  <button>Edit</button>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Discovery;
