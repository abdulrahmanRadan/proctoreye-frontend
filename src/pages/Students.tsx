import { useNavigate } from "react-router-dom";
import { useStudentContext } from "../context/StudentContext";
import EntityPage from "./EntityPage";

const Students: React.FC = () => {
  const navigate = useNavigate();
  const { students } = useStudentContext();

  const handleAddStudent = () => {
    navigate("/add-student");
  };

  const handleSearchStudent = (query: string) => {
    // منطق البحث عن طالب
    console.log(query);
  };

  return (
    <EntityPage
      page="Student"
      entities={students}
      onAdd={handleAddStudent}
      onSearch={handleSearchStudent}
    />
  );
};

export default Students;
