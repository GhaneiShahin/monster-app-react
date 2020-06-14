import React, { useEffect, useState } from "react";
import Search from "./components/Search/Search";

const App = () => {
  const [monsters, setMonster] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonster(users));
  }, []);
  console.log(monsters);
  return (
    <div>
      <Search monsters={monsters} />
    </div>
  );
};

export default App;

// import React, { Component } from 'react'

// export class App extends Component {
//   state={
//     monsters: []
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((users) => this.setState({ monsters: users }));
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           {this.state.monsters.map(monster => (
//             <div key={monster.id}>
//               <h5>{monster.name}</h5>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

// export default App
