import { useAppSelector } from "../../redux/hook";
import { ProfileForm } from "../../components/ProfileForm";

export function ProfilePage() {
  const { user } = useAppSelector((state) => state.Auth);

  const loadValues = () => {
    return {
      displayName: user?.displayName || "",
      phoneNumber: user?.phoneNumber || "",
      descricao: user?.descricao || "",
    };
  };

  return <ProfileForm initialValues={loadValues()} />;
}
