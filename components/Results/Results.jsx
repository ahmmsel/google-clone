import ResultsItem from "../ResultsItem/ResultsItem"
import style from "./Results.module.scss"

export default function Results({ data }) {
  const { formattedTotalResults, formattedSearchTime } = data.searchInformation
  return (
    <section>
      <div className="container">
        <small>About {formattedTotalResults} results({formattedSearchTime} seconds)</small>
        <div className={style.list}>
          {data.items?.map((item, index) => (
            <ResultsItem 
              key={index} 
              title={item.title} 
              link={item.link} 
              htmlSnippet={item.htmlSnippet} 
            />
          ))}
          {!data.items && <p>Not Result Found</p>}
        </div>
      </div>
    </section>
  )
}
