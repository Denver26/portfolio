function HomeContent() {
  return (
    <>
    <section className="container pt-5 d-flex justify-content-center min-vh-100">
      <div className="row align-items-center g-5 animated">
        <div className="col-md-8">
          <h2 className="fw-bold text-center text-md-start">John Denver Cunanan</h2>
          <p className="text-dark text-center text-md-start">
            I am a passionate Full Stack Developer specializing in backend technologies like 
            PHP, JavaScript, and MySQL, as well as frontend frameworks including React and Bootstrap.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src="./src/assets/profile.jpg"  
            alt="Profile" 
            className="profile img-fluid img-thumbnail animated shadow-lg" 
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>
    </section>


    </>
  );
  
  }
  
  export default HomeContent;
  