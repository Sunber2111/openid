import React, { Fragment, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "features/Home";
import { useSelector, useDispatch } from "react-redux";
import { getCurrent } from "features/Home/homeSlice";
const App = () => {
  const { isLoading } = useSelector((s) => s.home);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, []);

  return (
    <Fragment>
      <div className="App container">
        <Home />
      </div>
    </Fragment>
  );
};

export default App;
