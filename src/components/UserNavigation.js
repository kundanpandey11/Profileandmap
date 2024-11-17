import React from 'react';


const UserNavigation = () => {
    return (
        <nav className="bg-blue-200 text-white w-full p-4 fixed top-0 z-50 mb-8">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">CompanyName</h1>
            {/* Additional navigation links or elements could be added here */}
          </div>
        </nav>
      );
    };


export default UserNavigation;