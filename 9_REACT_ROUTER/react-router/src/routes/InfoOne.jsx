import { useParams } from "react-router-dom"

const InfoOne = () => {
    const {id} = useParams();

  return (
    <div>
      <h1>Mais informações sobreo produto: {id}</h1>
    </div>
  )
}

export default InfoOne
