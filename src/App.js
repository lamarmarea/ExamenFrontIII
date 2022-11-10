import React from 'react'
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

const App = () => {



  const [countTotalLikes, setCountTotalLikes] = useState(0);

  const incrementsLikes = () => {
    setCountTotalLikes(countTotalLikes+1);
    console.log(countTotalLikes)
  }


  return (
      <body>
      <nav>
        <Estatus countTotalLikes={countTotalLikes}/>
      </nav>
        <Posteos incrementsLikes={incrementsLikes}/>
      </body>
  )
} 
export default App