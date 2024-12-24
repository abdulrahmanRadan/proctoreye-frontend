import Header from "../components/Header";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header page="Dashboard" />
      <div className="p-4">
        <h2>Welcome to the Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;
