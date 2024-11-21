import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "../store/slices/formSlice";
import { getData } from "../store/slices/takePersonalSlice";

const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [assignProfile, setAssignProfile] = useState("");
  const [date, setDate] = useState("");
  const [reminding, setReminding] = useState("");
  const [personList, setPersonList] = useState([]);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.form.status);
  const error = useSelector((state) => state.form.error);

  useEffect(() => {
    dispatch(getData())
      .then((action) => {
        setPersonList(action.payload.newArray || []);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  // useEffect(() => {
  //   console.log("personList", personList);
  // }, [personList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      completed,
      description,
      endDate: date,
      reminderDate: reminding,
    };
    dispatch(sendData(formData));
  };

  return (
    <div>
      <h1>GÖREV OLUŞTURUN</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <hr />
        <input
          type="text"
          placeholder="Görev Detayı"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <hr />
        <label>
          Görev Tamamlandı mı?
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>
        <hr />
        <input
          type="text"
          placeholder="Görevli"
          value={assignProfile}
          onChange={(e) => setAssignProfile(e.target.value)}
        />
        <hr />
        <label>
          Görev Tarihi:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <hr />
        <label>
          Hatırlatma Tarihi:
          <input
            type="date"
            value={reminding}
            onChange={(e) => setReminding(e.target.value)}
          />
        </label>
        <hr />
        <button type="submit">Gönder</button>
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

export default FormComponent;
