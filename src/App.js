// import './App.css';
import { Student } from '../src/Components/Student';

function App() {
  return (
   <>
   <Student name="Kuber" runs={103} wicket={true} team="Panruti CC"/>
   <Student name="Balaji" runs={95} wicket={false} team="Rettavayal CC"/>
   <Student name="Kadhir" runs={99} wicket={false} team="Thirukandiswaram CC"/>
   <Student name="Hari" runs={69} wicket={true} team="Trichy "/>
   </>
  );
}

export default App;
