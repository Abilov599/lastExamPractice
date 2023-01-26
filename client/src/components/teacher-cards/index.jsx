import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData, fetchData } from "../../redux/slice/dataSlice";
import "./index.scss";

const Cards = () => {
  const teachersData = useSelector((state) => state.getData);
  const disp = useDispatch();

  useEffect(() => {
    disp(fetchData());
  }, [disp]);

  const handleDelete = (id) => {
    disp(deleteData(id)).then(() => disp(fetchData()));
  };

  return (
    <div className="card-row">
      {teachersData.data?.map((el) => {
        return (
          <div key={el._id} className="card">
            <div>
              <img src={`${el.teacherImg}`} alt="" />
            </div>
            <h2>{el.teacherName}</h2>
            <h3>{el.teacherType}</h3>
            <p>{el.teacherDescription}</p>
            <Link to={`/${el._id}`}>See details </Link>
            <button onClick={() => handleDelete(el._id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
