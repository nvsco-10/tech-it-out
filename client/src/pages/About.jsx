import React from 'react'
import Header from '../components/Header'
import "../css/main.scss";

export default function About() {
  return (
    <>
        <Header/>

        <section className='questionBox container'>

            <h1 className="title has-text-centered">About</h1>

            <div>
                <h2>
                    What is Tech About It?
                </h2>
                    <p>We're a nonprofit community that helps you learn to code by giving you resources to whatever you want to learn.</p>
            </div>

            <div>
                <h2>
                    Why do we do this?
                </h2>
                    <p>We have all been there. Endless googling and never find the right page, but now that trouble has come to an end. We did all the googling for you so you don't have to.</p>
            </div>

            <div>

                <h2>
                    Why is it free?
                </h2>
                    <p>Because... striving for knowledge should always be free.</p>
            </div>

            <div>
                <h2>
                    Will you ever start courses?
                </h2>
                    <p>Maybe in the near future, but for now we shall keep updating our site with the latest info and most googled searches for coding. </p>
                
            </div>
        </section>

    </>
  )
}
