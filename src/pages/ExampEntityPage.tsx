import Header from "../components/Header";
import { useState } from "react";
interface ExampEntity {
  day: string;
  date: string;
  college: string;
  level: string;
  specialization: string;
}

interface ExampEntityProps {
  page: string;
  entities: ExampEntity[];
  onAdd: () => void;
  onSearch: (query: string) => void;
  onEdit: (name: string) => void;
  onDelete: (name: string) => void;
}

const ExampEntityPage: React.FC<ExampEntityProps> = ({
  page,
  entities = [],
  onAdd,
  onSearch,
  onEdit,
  onDelete,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch?.(query);
    }
  };

  return (
    <div>
      <Header page={page} />
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder={`Search ${page}`}
            value={searchQuery}
            onChange={handleSearch}
            className="border p-2 rounded-lg"
          />
          <button
            onClick={onAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add New {page}
          </button>
        </div>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Image</th>{" "}
              {/* تعديل العنوان */}
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">College</th>
              <th className="border border-gray-300 px-4 py-2">Level</th>
              <th className="border border-gray-300 px-4 py-2">
                Specialization
              </th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>{" "}
              {/* إضافة عمود الإجراءات */}
            </tr>
          </thead>
          <tbody>
            {entities?.map((entity) => (
              <tr key={entity?.college}>
                <td className="border border-gray-300 px-4 py-2">
                  {entity?.day}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entity?.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entity?.college}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entity?.level}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entity?.specialization}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => {
                      if (onEdit) {
                        onEdit?.(entity?.college);
                      }
                    }}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (onDelete) {
                        onDelete?.(entity?.college);
                      }
                    }}
                    className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExampEntityPage;
