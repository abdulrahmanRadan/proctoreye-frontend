import EntityPage from "./EntityPage";

const Students: React.FC = () => {
  const students = [
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" },
    // أضف المزيد من الطلاب هنا
  ];

  const handleAddStudent = () => {
    // منطق إضافة طالب جديد
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
