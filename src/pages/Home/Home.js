import { useEffect, useState } from "react";
import { getTopics } from "../../api/api";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  const [topics, setTopics] = useState([]);
  const imageUrls = [
    "https://somos.lojaiplace.com.br/wp-content/uploads/2020/01/cinema-CRED-iStock_Roman-Valiev.jpg",
    "https://i.pinimg.com/564x/6e/1c/ff/6e1cff24cdbe4d7cf6de3c7730fbedfb.jpg",
    "https://i.pinimg.com/564x/03/51/4b/03514b2aead177c5c1c086c94080ae3d.jpg",
  ];

  useEffect(() => {
    getTopics().then((topics) => setTopics(topics));
  }, []);

  return (
    <div className="container">
      <div className="title-container">
        <h1>Clara's Notes</h1>
      </div>

      <div className="cards-container">
        {topics
          ? topics.map((topic) => (
              <Card
                key={topic.id}
                title={topic.title}
                image={imageUrls[topic.id - 1]}
                description={topic.title}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Home;
