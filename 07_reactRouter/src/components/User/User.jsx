import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center m-4 mt-11 bg-gray-100 text-3xl text-gray-600 font-bold p-4">
      User: {userid}
    </div>
  );
}

export default User;
