import Header from "../components/Header";
import { useState } from "react";

interface Entity {
  id: number;
  name: string;
}

interface EntityProps {
  page: string;
  entities: Entity[];
  onAdd: () => void;
  onSearch: (query: string) => void;
}

const EntityPage: React.FC<EntityProps> = ({
  page,
  entities,
  onAdd,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
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
        <ul className="list-disc pl-5">
          {entities.map((entity) => (
            <li key={entity.id} className="mb-2">
              {entity.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EntityPage;
