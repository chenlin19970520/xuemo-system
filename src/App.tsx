import { RouterProvider } from "react-router-dom";
import { router } from "@/router/index";
import { Provider } from "react-redux";
// 导入redux-persist提供PersistGate组件
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/index";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
