import style from "./ResultsItem.module.scss"

export default function ResultsItem({ title, link, htmlSnippet }) {
  return (
    <div>
      <article className={style.item}>
        <h3 className={style.title}>
          <a href={link}>{title}</a>
        </h3>
        <p className={style.snippet} dangerouslySetInnerHTML={{__html: htmlSnippet}}></p>
      </article>
    </div>
  )
}
