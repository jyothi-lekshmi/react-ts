import * as React from 'react';
import '../style.css';

const List: React.FC = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <table>
            {/* <thead>
            <tr>
              <td colSpan={2}> <b>List of People</b></td>
            </tr>
          </thead> */}
            <tbody>
              <tr>
                <td>First Name</td>
                <td>Jyothi</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>Jyothi</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>Jyothi</td>
              </tr>
              <tr>
                <td>Telephone</td>
                <td>Jyothi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default List;
