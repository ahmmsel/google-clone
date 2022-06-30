import ResultsItem from "../ResultsItem/ResultsItem";
import style from "./Results.module.scss";

export default function Results({ data }) {
  return (
    <section>
      <div className="container">
        <small>
          About {data?.searchInformation?.formattedTotalResults} results(
          {data?.searchInformation?.formattedSearchTime} seconds)
        </small>
        <div className={style.list}>
          {data?.items?.map((item, index) => (
            <ResultsItem
              key={index}
              title={item.title}
              link={item.link}
              htmlSnippet={item.htmlSnippet}
            />
          ))}
          {!data?.items && <p>Not Result Found</p>}
        </div>
      </div>
    </section>
  );
}
