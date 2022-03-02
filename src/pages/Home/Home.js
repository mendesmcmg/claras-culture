import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Clara's Stuff</h1>
      </div>

      <div className="content-container">
        <Card
          title="Filmes"
          image="https://somos.lojaiplace.com.br/wp-content/uploads/2020/01/cinema-CRED-iStock_Roman-Valiev.jpg"
          description="movie theater"
        />

        <Card
          title="Livros"
          image="https://i.pinimg.com/564x/6e/1c/ff/6e1cff24cdbe4d7cf6de3c7730fbedfb.jpg"
          description="books"
        />

        <Card
          title="Computação"
          image="https://i.pinimg.com/564x/03/51/4b/03514b2aead177c5c1c086c94080ae3d.jpg"
          description="computer"
        />
      </div>
    </div>
  );
}

export default Home;
