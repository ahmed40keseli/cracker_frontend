import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIdTaskData } from "../../../store/slices/getSelfTaskSlice";
import "./selfTaskForm.css";
import Button from "../../button/ButtonNormal";
import InputNormal from "../../input/InputNormal";
import InputCheckbox from "../../input/InputCheckbox";

const SelfTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [assignProfile, setAssignProfile] = useState("");
  const [date, setDate] = useState("");
  const [reminding, setReminding] = useState("");

  const dispatch = useDispatch();

  const status = useSelector((state) => state.formSelfTaskSlice.status);
  const error = useSelector((state) => state.formSelfTaskSlice.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const action = await dispatch(getIdTaskData());
        setPersonList(action.payload.newArray || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="SelfTaskForm">
      <h1>A Table</h1>
      <table id="customers">
        <tr>
          <th>title</th>
          <th>description</th>
          <th>completed</th>
          <th>assignProfile</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  );
};

export default SelfTaskForm;
