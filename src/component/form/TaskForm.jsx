import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "../../store/slices/taskCreateSlice";
import { getData } from "../../store/slices/takePersonalSlice";
import Button from "../button/ButtonNormal";
import Input from "../input/InputNormal";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [assignProfile, setAssignProfile] = useState("");
  const [date, setDate] = useState("");
  const [reminding, setReminding] = useState("");
  const [personList, setPersonList] = useState([]);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.formTaskSlice.status);
  const error = useSelector((state) => state.formTaskSlice.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const action = await dispatch(getData());
        setPersonList(action.payload.newArray || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {}, [personList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      completed,
      description,
      assignProfile,
      endDate: date,
      reminderDate: reminding,
    };
    dispatch(sendData(formData));
  };

  return (
    <div>
      <h1>GÖREV OLUŞTURUN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Görev Detayı"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>
            Görev Tamamlandı mı?
            <Input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <Input
            type="text"
            placeholder="Görevli"
            value={assignProfile}
            onChange={(e) => setAssignProfile(e.target.value)}
          />
        </div>
        <div>
          <label>
            Görev Tarihi:
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Hatırlatma Tarihi:
            <Input
              type="date"
              value={reminding}
              onChange={(e) => setReminding(e.target.value)}
            />
          </label>
        </div>
        <div>
          <Button type="submit">Gönder</Button>
        </div>
      </form>
      {status === "loading" && <p>Yükleniyor...</p>}
      {status === "succeeded" && <p>Veri başarıyla gönderildi!</p>}
      {status === "failed" && (
        <p>Hata: {error?.message || "Bir hata oluştu."}</p>
      )}

      <h2>Person List</h2>
      <ul>
        {personList.map((person, index) => (
          <li key={index}>
            <strong>{person.username}</strong> - Referans No:{" "}
            {person.referansNo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskForm;
