import * as React from 'react';
import '../style.css';
import { FormDataModel } from '../model/FormDataModel';
interface Props {
  list: FormDataModel[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}
const List: React.FC<Props> = ({ list, setList }) => {
  const deletePerson = (email: string) => {
    setList(
      list.filter((each) => {
        return each.email !== email;
      })
    );
  };
  const formatPhone = (value) => {
    if (!value) return value;
    const phone = value.replace(/[^\d]/g, '');
    const length = phone.length;
    if (length < 4) {
      // setPhone(phone);
      return phone;
    }
    if (length < 7) {
      let formatted = `(${phone.slice(0, 3)}) ${phone.slice(3)})`;
      // setPhone(formatted);
      return `(${phone.slice(0, 3)}) ${phone.slice(3)})`;
    } else {
      let formattedPhone = `(${phone.slice(0, 3)}) ${phone.slice(
        3,
        6
      )} - ${phone.slice(6, 10)}`;
      // setPhone(formattedPhone);
      return formattedPhone;
    }
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)} - ${phone.slice(
      6,
      10
    )} )`;
    console.log(length);
  };
  return (
    <div>
      <h1>List of People</h1>
      {list.map((each) => (
        <div className="row">
          <div className="column">
            <div className="card">
              <table>
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>{each.fname}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>{each.lname}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{each.email}</td>
                  </tr>
                  <tr>
                    <td>Telephone</td>
                    <td>{formatPhone(each.tel)}</td>
                  </tr>
                  <tr>
                    <td
                      colSpan={2}
                      onClick={() => deletePerson(each.email)}
                      className="removeButton"
                    >
                      Remove
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default List;
