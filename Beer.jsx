import {useState} from "react"
import "./App.css"

function App() {
  const [menuOpen, setMenuOpen]=useState(false)

  return (
    <div className="site">
      <header className="header">
        <p className="site-name">ビール利き診断</p>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
          <small>MENU</small>
        </button>
      </header>

      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-header">
            <p className="site-name">
              診断サイトロゴ（サイト名）
            </p>
            
            <button
              className="close-button"
              onClick={()=>setMenuOpen(false)}
            >
              ×
            </button>
          </div>
          
          <nav className="menu-list">
            <a href="#">
              <strong>Home</strong>
              <span>ホーム</span>
            </a>

            <a href="#">
              <strong>Start</strong>
              <span>ビール利き診断を始める</span>
            </a>

            <a href="#">
              <strong>Beer</strong>
              <span>3種のカブトビール</span>
            </a>

            <a href="#">
              <strong>Column</strong>
              <span>カブトビールの豆知識</span>
            </a>
          </nav>
        </div>

      )}

      <main>
        <section className="hero">

          <div className="hero-image">
            <p>ロゴ？</p>
          </div>

          <p className="hero-description">
            説明文
          </p>

          <p className="hero-text">
            テキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキスト
          </p>

          <h2 className="hero-catch">あなたの好みに合う1杯を<br/>ご提案します</h2>

          <button className="diagnosis-button">
            診断する！
            <span>▶</span>
          </button>
        </section>

        <section className="beer-section">

          <div className="section-heading">
            <h2>Beer</h2>
            <p>3種のカブトビール</p>
          </div>
          
          <div className="beer-list">
            <div>
              <h3>明治</h3>
              <div className="beer-image">Beer</div>
              <a href="#">詳しく →</a>
            </div>

            <div>
              <h3>大正</h3>
              <div className="beer-image">Beer</div>
              <a href="#">詳しく →</a>
            </div>

            <div>
              <h3>昭和</h3>
              <div className="beer-image">Beer</div>
              <a href="#">詳しく →</a>
            </div>
          </div>

          
        </section>

        <section className="diagnosis-banner">

          <h2>あなたに合ったビールが<br/>見つかるかも?</h2>

          <p>\ さっそく! /</p>

          <button className="diagnosis-button">
            診断する！
            <span>▶</span>
          </button>
        </section>

        <section className="column-section">

          <div className="section-heading">
            <h2>Column</h2>
            <p>カブトビールの豆知識</p>
          </div>

          <div className="column-card">
            <p>
              紹介文または豆知識の一部<br />
              テキストテキストテキストテキスト<br />
              テキストテキストテキスト
            </p>
          </div>

          <a href="#" className="column-link">
            詳しく見る →
          </a>

        </section>

      </main>


      <footer className="footer">

        <div className="footer-logo">
          HAnDA<br />
          project
        </div>

        <p>
          Heritage Augmentation and Digital Activation
        </p>

        <small>
          © 2026 HAnDA project
        </small>

      </footer>

    </div>
  )
}


export default App
