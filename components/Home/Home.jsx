import Image from "next/image"

import style from "./Home.module.scss"
import useForm from "../../hooks/useForm"
import usePush from "../../hooks/usePush"

export default function Home() {
  const { values: { querySearch }, inputChangeHandler, submitHandler } = useForm({ querySearch: "" }, submitCallback)

  const routerHandler = usePush(`/search?q=${querySearch}`)

  function submitCallback() {
    querySearch.trim() && routerHandler()
  }

  return (
    <main className={`container section ${style.home}`}>
      <form onSubmit={submitHandler} className={style.form}>
        <Image 
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={300}
          alt="google logo"
          height={100}
        />
        <label className={style.controller}>
          <div className="pointer bi bi-search" onClick={submitCallback}></div>
          <input 
            type="text" 
            name="querySearch"
            onChange={inputChangeHandler}
            className="input primary-input"
          />
        </label>
        <button type="submit" className="btn primary-btn">Google Search</button>
      </form>
    </main>
  )
}
