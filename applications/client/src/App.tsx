import type { Component } from "solid-js"

import styles from "./App.module.css"
import bgImg from "./assets/bg.jpg"
import { Route, Routes } from "@solidjs/router"
import HomeRoute from "./routes/HomeRoute"

const App: Component = () => {
  return (
    <>
      <img src={bgImg} class={styles.bgImg} />
      <div class={styles.App}>
        <Routes>
          <Route path="/" component={HomeRoute} />
        </Routes>
      </div>
    </>
  )
}

export default App
