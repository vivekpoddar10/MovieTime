import Body from "./Body";
import { Provider } from "react-redux";
import AppStore from "../Store/appStore";

const App = () => {
  return (
    <Provider store={AppStore}>
      <Body />
    </Provider>
  );
};
export default App;
