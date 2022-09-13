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
                    <td>{each.tel}</td>
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
