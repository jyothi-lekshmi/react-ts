import * as React from 'react';
import Forms from './component/form';
import List from './component/list';
import './style.css';

interface FormDataModel {
  fname: string;
  lname: string;
  email: string;
  tel: number;
}

const App: React.FC = () => {
  const [formData, setFormData] = React.useState<Array<FormDataModel>>([]);
  const [list, setList] = React.useState<Array<any>>([]);
  const [fname, setFname] = React.useState(null);
  const [lname, setLname] = React.useState<string>(null);
  const [email, setEmail] = React.useState(null);
  const [tel, setTel] = React.useState(null);

  const handleAdd = (data, e: React.FormEvent) => {
    e.preventDefault();

    if (data) {
      console.log('ghhg--->', data);
      setList([...list, data]);
      setFname(null);
      setLname(null);
      setEmail(null);
      setTel(null);
    }
  };
  console.log(list);
  return (
    <div className="container">
      <h1 className="formHead">Add Induvidual</h1>
      <Forms
        formData={formData}
        setFormData={setFormData}
        setFname={setFname}
        setLname={setLname}
        setEmail={setEmail}
        setTel={setTel}
        firstName={fname}
        lname={lname}
        email={email}
        tel={tel}
        handleAdd={handleAdd}
      />
      <List list={list} setList={setList} />
    </div>
  );
};
export default App;
