import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import { getNews } from "./services/getNews";

import NavbarComponent from "./components/Navbar";
import NewsCard from "./components/NewsCard";

import { NewsProps } from "./insterface";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState<NewsProps[]>([]);

  useEffect(() => {
    const fetchTechNews = async () => {
      const res = await getNews();
      if (!res) {
        console.log("error");
        return;
      }
      console.log(res);
      setArticles(res.articles);
    };
    fetchTechNews();
  }, []);

  return (
    <Container className="App" fluid>
      <NavbarComponent />
      <div className="contentWrapper">
        {articles.map((item, index) => (
          <NewsCard item={item} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default App;
