import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="hero-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Personal Banking <span aria-hidden="true">|</span> Business Banking</p>
          <h1 id="hero-title">
            Send money, pay bills, and take control of your finances with a seamless banking experience built for everyday life
          </h1>
          <p className="hero-description">
            One platform for transfers, payments, and everyday financial services.
          </p>
          <a className="cta" href="#get-started">Get started</a>
        </div>

        <div className="hero-art" aria-label="9iceMoney mobile banking and POS devices">
          <Image
            src="/images/9icemoney-hero-visual.png"
            alt="A customer holding a 9iceMoney banking app and payment terminal"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 54vw"
            className="hero-image"
          />
        </div>
        <span className="scribble scribble-top" aria-hidden="true">↶</span>
        <span className="scribble scribble-bottom" aria-hidden="true">↶</span>
      </section>
      <span id="get-started" className="visually-hidden">Get started with 9iceMoney</span>
    </main>
  );
}
