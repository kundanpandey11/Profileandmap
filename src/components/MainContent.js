


function MainContent({ children }) {
    return (
      <div className="pt-20"> {/* This padding-top value should be at least the height of the navbar plus any additional space */}
        {children}
      </div>
    );
  }


export default MainContent;