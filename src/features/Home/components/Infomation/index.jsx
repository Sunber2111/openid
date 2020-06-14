import React from "react";
import { Label, Image, Button } from "semantic-ui-react";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout } from "features/Home/homeSlice";

const Infomation = () => {
  const img = localStorage.getItem("img");
  const name = localStorage.getItem("name");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(logout());
  };

  return (
    <div className="card-info py-3 flex-column d-flex justify-content-center">
      <Button circular icon="x" className="btn-logout" onClick={handleClick} />
      <div>
        <Image
          className="mx-auto img-avatar"
          src={img}
          size="medium"
          circular
        />
      </div>
      <div className="text-center">
        <Label color="blue" className="mt-2">
          <h2>{name}</h2>
        </Label>
      </div>
    </div>
  );
};

export default Infomation;
