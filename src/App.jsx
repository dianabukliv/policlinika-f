import { useState, useEffect } from 'react';
import { createDoctor, fetchDoctor, deleteDoctor } from './api-calls/doctor';
import { createPatient, fetchPatient, deletePatient } from './api-calls/patient';
import { createReception, fetchReception, deleteReception } from './api-calls/reception';
import { createDiagnosis, fetchDiagnosis, deleteDiagnosis } from './api-calls/diagnosis'

function App() {
  const [table, setTable] = useState("Лікар");
  const [tableData, setTabledata] = useState([]);
  const [idDelete, setIdDelete] = useState('');
  const [newInsert, setNewInsert] = useState({});

  useEffect(() => {
    switch (table) {
      case "Лікар":
        fetchDoctor().then(data => {
          setTabledata(data);
        });
        break;
      case "Пацієнт":
        fetchPatient().then(data => {
          setTabledata(data);
        });
        break;
        case "Прийом":
        fetchReception().then(data => {
          setTabledata(data);
        });
        break;
      case "Діагноз":
        fetchDiagnosis().then(data => {
          setTabledata(data);
        });
    }
  }, [table]);

  const handleFormChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setNewInsert({ ...newInsert, [name]: value });
  }

  return (
    <>
      <div className="flex">
        <nav>
          <ul>
            <li onClick={() => setTable("Лікар")}>Лікар</li>
            <li onClick={() => setTable("Пацієнт")}>Пацієнт</li>
            <li onClick={() => setTable("Прийом")}>Прийом</li>
            <li onClick={() => setTable("Діагноз")}>Діагноз</li>
          </ul>
        </nav>
        <form onSubmit={() => {
          switch (table) {
            case "Лікар":
              deleteDoctor(idDelete);
              break;
            case "Пацієнт":
              deletePatient(idDelete);
              break;
            case "Прийом":
                deleteReception(idDelete);
              break;
            case "Діагноз":
                  deleteDiagnosis(idDelete);
              break;      
          }
        }}>
          <input type="text" placeholder='Видалити елемент по id' value={idDelete} onChange={(e) => setIdDelete(e.target.value)} />
          <input type="submit" value="Видалити" />
        </form>
        <form onSubmit={() => {
          switch (table) {
            case "Лікар":
              createDoctor(newInsert);
              break;
            case "Пацієнт":
              createPatient(newInsert);
              break;
            case "Прийом":
                createReception(newInsert);
              break;
            case "Діагноз":
              createDiagnosis(newInsert);
              break;  
          }
        }}>
          {table === "Лікар" && (
            <>
              <input type="int" onChange={handleFormChange} name='id_дікар' placeholder='id_лікар' />
              <input type="text" onChange={handleFormChange} name='Прізвище' placeholder='Прізвище' />
              <input type="text" onChange={handleFormChange} name="Ім'я" placeholder="Ім'я" />
              <input type="text" onChange={handleFormChange} name='По батькові' placeholder='По батькові' />
              <input type="int" onChange={handleFormChange} name='Ціна' placeholder='Ціна' />
              <input type="submit" value="Створити нове" />
            </>
          )}
          {table === "Пацієнт" && (
            <>
              <input type="int" onChange={handleFormChange} name="id_пацієнт" placeholder="id_пацієнт" />
              <input type="text" onChange={handleFormChange} name="Прізвище_пацієнта" placeholder="Прізвище_пацієнта" />
              <input type="text" onChange={handleFormChange} name="Ім'я_пацієнта" placeholder="Ім'я_пацієнта" />
              <input type="text" onChange={handleFormChange} name="По батькові_пацієнта" placeholder="По батькові_пацієнта" />
              <input type="text" onChange={handleFormChange} name="Дата_народження" placeholder="Дата_народження" />
              <input type="text" onChange={handleFormChange} name="Адрес" placeholder="Адрес" />
              <input type="int" onChange={handleFormChange} name="id_лікар" placeholder="id_лікар" />
              <input type="int" onChange={handleFormChange} name="id_діагноз" placeholder="id_діагноз" />
              <input type="submit" value="Створити нове" />
            </>
          )}
          {table === "Прийом" && (
            <>
              <input type="int" onChange={handleFormChange} name='id_прийом' placeholder='id_прийом' />
              <input type="int" onChange={handleFormChange} name='id_пацієнт ' placeholder='id_пацієнт ' />
              <input type="int" onChange={handleFormChange} name='id_лікар' placeholder='id_лікар' />
              <input type="text" onChange={handleFormChange} name='Дата_прийому' placeholder='Дата_прийому' />
              <input type="submit" value="Створити нове" />
            </>
          )}
          {table === "Діагноз" && (
            <>
              <input type="text" onChange={handleFormChange} name='id_діагноз' placeholder='id_діагноз' />
              <input type="text" onChange={handleFormChange} name='id_пацієнта' placeholder='id_пацієнта' />
              <input type="text" onChange={handleFormChange} name='id_лікар' placeholder='id_лікар' />
              <input type="text" onChange={handleFormChange} name='Діагноз' placeholder='Діагноз' />
              <input type="submit" value="Створити нове" />
            </>
          )}
        </form>
      </div>
      {table === "Лікар" && <table>
        <thead>
          <tr>
            <th>id_лікар</th>
            <th>Прізвище</th>
            <th>Ім'я</th>
            <th>По батькові</th>
            <th>Ціна</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row =>
            <tr>
              <td>{row["id_лікар"]}</td>
              <td>{row["Прізвище"]}</td>
              <td>{row["Ім'я"]}</td>
              <td>{row["По батькові"]}</td>
              <td>{row["Ціна"]}</td>
            </tr>
          )}
        </tbody>
      </table>}
      {table === "Пацієнт" && <table>
        <thead>
          <tr>
            <th>id_пацієнт</th>
            <th>Прізвище_пацієнта</th>
            <th>Ім'я_пацієнта</th>
            <th>По батькові_пацієнта</th>
            <th>Дата_народження</th>
            <th>Адрес</th>
            <th>id_лікар</th>
            <th>id_діагноз</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row =>
            <tr>
              <td>{row["id_пацієнт"]}</td>
              <td>{row["Прізвище_пацієнта"]}</td>
              <td>{row["Ім'я_пацієнта"]}</td>
              <td>{row["По батькові_пацієнта"]}</td>
              <td>{row["Дата_народження"]}</td>
              <td>{row["Адрес"]}</td>
              <td>{row["id_лікар"]}</td>
              <td>{row["id_діагноз"]}</td>
            </tr>
          )}
        </tbody>
      </table>}
      {table === "Прийом" && <table>
        <thead>
          <tr>
            <th>id_прийом</th>
            <th>id_пацієнт</th>
            <th>id_лікар</th>
            <th>Дата_прийому</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row =>
            <tr>
              <td>{row["id_прийом"]}</td>
              <td>{row["id_пацієнт"]}</td>
              <td>{row["id_лікар"]}</td>
              <td>{row["Дата_прийому"]}</td>
            </tr>
          )}
        </tbody>
      </table>}
      {table === "Діагноз" && <table>
        <thead>
          <tr>
            <th>id_діагноз</th>
            <th>id_пацієнта</th>
            <th>id_лікар</th>
            <th>Діагноз</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row =>
            <tr>
              <td>{row["id_діагноз"]}</td>
              <td>{row["id_пацієнта"]}</td>
              <td>{row["id_лікар"]}</td>
              <td>{row["Діагноз"]}</td>
            </tr>
          )}
        </tbody>
      </table>}
    </>
  )
    ;
}

export default App;
