# React

Pregunta 1
¿Cuál es la diferencia entre un componente UI y un componente funcional en React?

  -El componente UI esta más enfocado en la presentación y tiene como proposito renderizar una 
    interfase de usuario, lo vemos mucho en botones, tarjetas y formularios.
  -Mientras que el componente funcional que esta en React nso enseñas que los componente pueden obetner ¨props¨ y manejar una lógica básica, pero no manejan su propio estado a menos que se utilicen hooks (useState - useEffects).

Preguna 2.
¿Qué son las props en React y cuál es su propósito principal?
Los props (abreviatura de "properties") son un mecanismo que permite pasar datos desde un componente padre a sus componentes hijos. Son esenciales para crear componentes reutilizables y para gestionar la comunicación entre componentes.

Pregunta 3.
¿Qué son los children props en React y por qué no se recomienda su uso excesivo?
Los children props son una forma de pasar contenido entre componentes. Se utilizan para incluir elementos dentro de un componente t no se recomienda su uso excesivo porque puede hacer que la estructura del componente sea menos clara y más difícil de entender.

Pregunta 4.
¿Qué es useState en React y para qué se utiliza principalmente?
Es un Hook(son una forma de reutilizar la lógica de estado, no el estado en sí.) de React que permite añadir estado a los componentes funcionales. Se utiliza principalmente para gestionar datos que pueden cambiar a lo largo del tiempo y que afectan la renderización del componente.
