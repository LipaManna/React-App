import { Link } from "react-aria-components";
import { FaArrowRightLong } from "react-icons/fa6";

export interface IInfographicArticleProps {
    header: string;
    description: string;
    img: string;
    id: number;
    cta_url?: string;
}

const InfographicArticle:React.FC<IInfographicArticleProps> = ({
    header,
    description,
    img,
    cta_url 
}) => {
  return (
    <div className="common_component_wrap info_article_wrap" style={{backgroundImage: `url(${img})`}}>
          <div className="article_wrap_content">
           <div>
           <b className="article_header">{header}</b>
           <p className="article_description">{description}</p>
           </div>
            <Link className="article_cta" target={cta_url}>
              Read more <FaArrowRightLong />
            </Link>
          </div>
        </div>
  )
}

export default InfographicArticle
