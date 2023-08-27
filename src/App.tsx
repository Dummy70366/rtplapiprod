import { Provider } from "react-redux";
import "./index.css";
import RouterComponent from "./router/RouterComponent";
import { store } from "./redux/store";
import ToastNotification from "./components/toastNotification/ToastNotification";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterComponent />
        <ToastNotification />
      </Provider>
    </div>
  );
}

export default App;
