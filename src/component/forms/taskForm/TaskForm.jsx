import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "../../../store/slices/taskCreateSlice";
import { getData } from "../../../store/slices/takePersonalSlice";
import "./taskForm.css";
import Button from "../../common/button/ButtonNormal";
import InputNormal from "../../common/input/InputNormal";
import InputCheckbox from "../../common/input/InputCheckbox";

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

  const sessionDegerReferansno = sessionStorage.getItem("referansNo");
  const sessionRoleID = sessionStorage.getItem("roleId");

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

  const filteredPersonList = personList.filter(
    (person) => String(person.referansNo) === String(sessionDegerReferansno)
  );

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
    <div className="taskCreateForm">
      <h1>GÖREV OLUŞTURUN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <InputNormal
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <InputNormal
            type="text"
            placeholder="Görev Detayı"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="normalCheckbox-label">
            <p>Görev Tamamlandı mı?</p>
            <InputCheckbox
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <label>
            <p>Görevli Seçin:</p>
            <select
              value={assignProfile}
              onChange={(e) => setAssignProfile(e.target.value)}
            >
              <option value="" disabled>
                Görevli seçin
              </option>
              {filteredPersonList.map((person) => (
                <option key={person.referansNo} value={person.username}>
                  {person.username} - {person.referansNo}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <p>Görev Tarihi:</p>
            <InputNormal
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <p>Hatırlatma Tarihi:</p>
            <InputNormal
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
    </div>
  );
};

export default TaskForm;
