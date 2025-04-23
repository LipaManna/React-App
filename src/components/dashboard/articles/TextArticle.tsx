import { Link } from "react-aria-components";
import "./articles.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export interface ITextArticleProps {
  id: number;
  title: string;
  header: string;
  description: string;
  img: string;
  cta_url: string;
}
const TextArticle: React.FC<ITextArticleProps> = ({
  title,
  header,
  description,
  img,
  cta_url,
}) => {
  return (
    <div className="common_component_wrap text_article_wrap">
      <div className="article_wrap_left">
        <div>
        <p className="article_title">{title}</p>
        <b className="article_header">{header}</b>
        <p className="article_description">{description}</p>
        </div>
        <Link className="article_cta" target={cta_url}>
          Read more <FaArrowRightLong />
        </Link>
      </div>
      <div className="article_wrap_right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default TextArticle;
