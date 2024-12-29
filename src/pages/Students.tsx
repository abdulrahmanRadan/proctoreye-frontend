import { useNavigate } from "react-router-dom";
import { useStudentContext } from "../context/StudentContext";
import EntityPage from "./EntityPage";

const Students: React.FC = () => {
  const navigate = useNavigate();
  const { students } = useStudentContext();

  const handleAddStudent = () => {
    navigate("/add-student");
  };
  const handleEditStudent = (name: string) => {
    // logic to edit a student
    console.log(`Editing student: ${name}`);
  };

  const handleDeleteStudent = (name: string) => {
    // logic to delete a student
    console.log(`Deleting student: ${name}`);
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
      onEdit={handleEditStudent}
      onDelete={handleDeleteStudent}
    />
  );
};

export default Students;
