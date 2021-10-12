import { useContext } from "react"
import { Redirect, Route } from "react-router"
import { AuthContext } from "../providers/AuthProvider"


const ProtectedRoute = ({ component: Component, ...rest }) => {  //need to research this..
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              from: props.location,
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;