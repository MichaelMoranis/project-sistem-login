import React from "react";
import * as C from "./styles";

const Button = ({Text, onClick, Type ="button"}) => {
    
   return (
    <C.Content>
      <C.Button type={Type} onClick={onClick}>
        {Text}
      </C.Button>
    </C.Content>

    )
}

export default Button;