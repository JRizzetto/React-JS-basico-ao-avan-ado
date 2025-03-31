// import { useState } from "react"

// const Data = () => {
//   const [number, setNumber] = useState(10)

//   return (
//     <div>
//       <p>Valor: { number }</p>
//       <button onClick={() => setNumber(event => event + 1)}>Mudar variável</button>
//     </div>
//   )
// }

// export default Data

import { useState } from "react"

const Data = () => {
  const [number, setNumber] = useState(10)
  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(sum => sum + 1)}>Contador</button>
    </div>
  )
}

export default Data
