// src/pages/index.jsx

import BlogList from "@/components/BlogList";


const Home = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold  p-4">Welcome to the Blog App</h2>
   
    <BlogList/>
    </div>
  );
};

export default Home;
