import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Clara's Culture</h1>
      </div>

      <div className="content-container">
        <div className="card">
          <img src='https://somos.lojaiplace.com.br/wp-content/uploads/2020/01/cinema-CRED-iStock_Roman-Valiev.jpg'/>
          <h2>Filmes</h2>
        </div>

        <div className="card">
          <img src='https://i.pinimg.com/564x/6e/1c/ff/6e1cff24cdbe4d7cf6de3c7730fbedfb.jpg'/>
          <h2>Livros</h2>
        </div>

        <div className="card">
          <img src='https://i.pinimg.com/564x/03/51/4b/03514b2aead177c5c1c086c94080ae3d.jpg'/>
          <h2>Computação</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
