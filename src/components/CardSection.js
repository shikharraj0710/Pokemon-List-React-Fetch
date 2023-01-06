import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppcontextProvider";

function CardSection() {
  const { data, loading, setSelectedId } = useAppContext();
  const navigate = useNavigate();

  function handleNameClick(id) {
    setSelectedId(id);
    navigate(`/details/${id}`);
  }

  return (
    <div className="flex flex-wrap -m-4 text-center">
      {loading && (
        <div className="my-12 text-3xl font-bold font-mono tracking-widest  min-h-[100vh]">
         <p>Loading...</p> 
         <div style={{borderTopColor:"transparent"}} className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin my-6 mx-auto"></div>
        </div>
      )}
      {data?.map((d) => (
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full " key={d?.id} onClick={() => handleNameClick(d?.id)}>
          <div className="border-2 border-white px-4 py-6 rounded-lg hover:border-gray-50 hover:bg-gray-400 transition-all duration-200 group cursor-pointer">
            <img
              src={d?.images?.small}
              alt={d.name}
              className="w-[50%] h-auto mx-auto"
            />
            <h2
              className="title-font font-medium text-2xl my-3 text-gray-900 underline cursor-pointer hover:text-gray-600 transition-all duration-200 group-hover:text-white"
            >
              {d.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(CardSection);
