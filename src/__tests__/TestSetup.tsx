import { Provider } from "react-redux";
import { store } from "../redux/store";
import { MemoryRouter } from "react-router-dom";

interface TestSetupProps {
  children: React.ReactNode;
}

export default function TestSetup({ children }: TestSetupProps) {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
}
