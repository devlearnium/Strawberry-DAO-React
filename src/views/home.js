import React from 'react'

import { Helmet } from 'react-helmet'

import Section1 from '../components/section-1'
import Section2 from '../components/section-2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Strawberry DAO</title>
        <meta property="og:title" content="Strawberry DAO" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-container1">
          <img
            alt="logo"
            src="/playground_assets/icon.svg"
            className="home-image"
          />
          <span className="home-text">
            <span>
              Strawberry
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text02">DAO</span>
          </span>
        </div>
        <div className="home-button-group">
          <a
            href="https://anoya.io"
            target="_blank"
            rel="noreferrer noopener"
            className="button hover:text-white border-red-500 btn-red py-2 border bg-transparent px-4 hover:border-transparent rounded-lg .cursor-auto duration-500 hover:bg-red-500"
          >
            BUY TOKEN
          </a>
          <span className="home-text03 text-gray-500">with anoya.io</span>
        </div>
      </header>
      <div className="home-section-1">
        <div className="home-section1">
          <Section1 rootClassName="section1-root-class-name"></Section1>
          <img
            alt="image"
            src="/playground_assets/plant-600w.webp"
            className="home-image1 absolute opacity-80 bg-fixed top-0 blur bg-center left-0 bg-no-repeat w-full h-full bg-cover"
          />
        </div>
      </div>
      <div className="home-features">
        <Section2></Section2>
      </div>
      <div className="home-features1">
        <h1 className="home-text04">
          <span className="home-text05">Principles and values</span>
          <span>
            {' '}
            of Strawberry
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text07">DAO:</span>
        </h1>
        <p className="home-text08">
          <span className="home-text09">🍓  Eco-friendly production;</span>
          <br className="home-text10"></br>
          <br className="home-text11"></br>
          <span className="home-text12">
            {' '}
            🍓  Use only renewable energy sources;
          </span>
          <br></br>
          <br className="home-text14"></br>
          <span className="home-text15">
            {' '}
            🍓  Implementation of the #Smart_house concept in agriculture;
          </span>
          <br></br>
          <br className="home-text17"></br>
          <span className="home-text18">
            {' '}
            🍓  Automatic watering, lighting, fertilizer;
          </span>
          <br></br>
          <br className="home-text20"></br>
          <span className="home-text21">
            {' '}
            🍓  Hand-picked with warmth and love.
          </span>
        </p>
      </div>
      <div className="home-container2">
        <div className="home-container3">
          <h1 className="home-text22">
            <span className="home-text23">The mission</span>
            <span className="home-text24">
              {' '}
              of Strawberry
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text25">DAO</span>
            <br className="home-text26"></br>
            <span className="home-text27">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="home-text28"></br>
            <span className="home-text29">
              is to improve the quality of nutrition and, as a result, the
              quality of people life, as well as the overall environmental
              situation through the development of sustainable agriculture and
              regenerative farming.
            </span>
          </h1>
          <img
            alt="image"
            src="/playground_assets/img%20%5B3%5D-400h.png"
            className="home-image2"
          />
        </div>
        <div className="home-container4">
          <img
            alt="logo"
            src="/playground_assets/icon.svg"
            className="home-image3"
          />
          <span className="home-text30">
            <span>
              Strawberry
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text32">DAO</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
