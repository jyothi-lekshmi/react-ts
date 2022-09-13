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

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData) {
      console.log(formData);
      // setFormData([...todolist, { id: Date.now(), todo, isDone: false }]);
      // setTodo("");
    }
  };

  return (
    <div>
      <Forms
        formData={formData}
        setFormData={setFormData}
        handleAdd={handleAdd}
      />
      <List />
    </div>
  );
};
export default App;
