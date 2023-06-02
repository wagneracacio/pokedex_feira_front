import { MemoryRouter } from "react-router-dom";
import Layout from "../pages/Layout";

interface TestProviderProps {
  title: string;
  children?: React.ReactNode;
}
export default function TestProvider({ title, children }: TestProviderProps) {
  return (
    <MemoryRouter>
      <Layout title={title} goBack>
        {children}
      </Layout>
    </MemoryRouter>
  );
}
