import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cocinero from "./Cocinero";
import Mesero from "./Mesero";
const Main = (setMinutes, setHoras,setSegundos,setPedidosId) => (
  <Main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cocinero" component={Cocinero} />
      <Route path="/mesero"  render={(props) => (
                <Mesero
                  {...props}
                  setMinutes={setMinutes}
                  setHoras={setHoras}
                  setSegundos={setSegundos}
                  setPedidosId={setPedidosId}
                />
              )}/>
    </Switch>
  </Main>
);
export default Main;