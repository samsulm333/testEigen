import { FC } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import styles from "./NewsCard.module.css";
import { NewsProps } from "../../insterface";

type Props = {
  item: NewsProps;
};

const NewsCard: FC<Props> = ({ item }) => {
  return (
    <>
      <Card className={styles.cardWrapper} sm="12" xl="6">
        <CardImg
          width="100%"
          src={item.urlToImage}
          className={styles.cardImage}
        />
        <CardBody>
          <CardTitle>
            <h2>{item.title}</h2>
          </CardTitle>
          <CardSubtitle>
            <strong>
              <small>{`${item.author} | ${item.source.name}`}</small>
            </strong>
          </CardSubtitle>
          <CardText>{item.description}</CardText>
          <CardLink href={item.url} className={styles.cardUrl}>
            Go to Website
          </CardLink>
        </CardBody>
      </Card>
    </>
  );
};

export default NewsCard;
