import User from "./components/User"

function App() {

  const users = [
    {
      id: 32423,
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
      id: 0o0000001,
      name: 'esa sabela',
      age: 34,
      isReg: true
    }
  ]

  return (
    <div>
      <h1 className="text-red-500 text-6xl text-center">Hello World</h1>
      <User users={users}/>
    </div>
  )
}

export default App
