import User from "./components/User"
import type { AllowedId, AllowedName } from "./components/Allow";

// You can also move this type to a separate file like types.ts and import it

type UserType = {
  id: AllowedId;
  name: AllowedName;
  age: number;
  isReg: boolean;
};

const users: UserType[] = [
  {
    id: '45',
    name: 'potato',
    age: 14,
    isReg: true
  },
  {
    id: 323,
    name: 'sakib',
    age: 34,
    isReg: false
  },
  {
    id: '0000001',
    name: 'esa bela',
    age: 34,
    isReg: true
  },
  {
    id: 45,
    name: 'dorami',
    age: 34,
    isReg: true
  }
];

function App() {
  return (
    <div className="flex justify-center items-center gap-5 flex-col">
      <h1 className="text-red-500 text-5xl font-bold text-center">Hello World</h1>
      <User users={users} />
    </div>
  );
}

export default App;
