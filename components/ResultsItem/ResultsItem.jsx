import Link from "next/link"

import style from "./ResultsItem.module.scss"

export default function ResultsItem({ title, link, htmlSnippet }) {
  return (
    <div>
      <article className={style.item}>
        <h3 className={style.title}>
          <Link href={link}>{title}</Link>
        </h3>
        <p className={style.snippet} dangerouslySetInnerHTML={{__html: htmlSnippet}}></p>
      </article>
    </div>
  )
}
