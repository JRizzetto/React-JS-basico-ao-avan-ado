import React from 'react'

const Events = () => {

    function eventClick(e) {
        console.log(e)
        console.log("OLá dev doido")
    };

    const rederSomething = (x) => {
        if(x) {
            return <h1>Renderiznado isso!</h1>
        }else {
            return <h1>Renderizando outra coisa</h1>
        }
    };

    return 10 < 2 && <p>Carregando ...</p>;

  return (
    <div>
      <div> <button onClick={eventClick}></button></div>

      {rederSomething(true)}
      {rederSomething(false)}
    </div>
  )
}

export default Events
