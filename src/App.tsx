// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// // @ts-ignore
// import DynamicDataTable from "@langleyfoxall/react-dynamic-data-table";

// function App() {
//   const users = [
//   { name: "Picard", email: "picard@enterprise-d.com"  },
//   { name: "Kirk",   email: "kirk@enterprise-a.com"    },
//   { name: "Sisko",  email: "sisko@deep-space-9.com"   }
// ];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <DynamicDataTable rows={users}/>
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function App() {
  return (
    <div className="my-container">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>
  );
}
