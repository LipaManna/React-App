import React, { useEffect } from "react";
import TextArticle from "./TextArticle";
import { ITextArticleProps } from "./TextArticle";
import InfographicArticle, {
  IInfographicArticleProps,
} from "./InfographicArticle";

const ArticlesWrapper = () => {
  const [staticArticleData, setStaticArticleData] = React.useState<
    ITextArticleProps[]
  >([]);
  const [staticInfographicData, setStaticInfographicData] = React.useState<
    IInfographicArticleProps[]
  >([]);

  const getmockArticleData = async () => {
    try {
      // Fetch the JSON data from the local file
      const res = await fetch("src/models/mockTextArticleData.json");
      const data = await res.json();
      setStaticArticleData(data.staticArticleData);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  const getmockInfographicData = async () => {
    try {
      const res2 = await fetch("src/models/mockInfoArticleData.json");
      const data2 = await res2.json();
      setStaticInfographicData(data2.staticInfographicData);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  useEffect(() => {
    getmockArticleData();
    getmockInfographicData();
    return () => {
      setStaticArticleData([]);
      setStaticInfographicData([]);
    };
  }, []);

  return (
    <div className="component_wrapper">
      {staticArticleData.map((articleDataElement) => {
        return (
          <TextArticle {...articleDataElement} key={articleDataElement.id} />
        );
      })}
      {staticInfographicData.map((infographicDataElement) => {
        return (
          <InfographicArticle
            {...infographicDataElement}
            key={infographicDataElement.id}
          />
        );
      })}
    </div>
  );
};

export default ArticlesWrapper;
