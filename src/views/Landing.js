import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RepositoryCard from "../components/RepositoryCard";
import Banner from "../components/Banner";
export default function Landing() {
  const [repositories, setRepositories] = useState();
  const [query, setQuery] = useState();

  useEffect(() => {
    setRepositories(null);
    axios
      .get(`http://localhost:8000/api/repository/${query}`)
      .then((res) => {
        setRepositories(res.data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  let repositoryComponent;
  if (repositories) {
    repositoryComponent = repositories.map((repository) => {
      return <RepositoryCard repository={repository} key={repository.id} />;
    });
  }

  return (
    <>
      <Navbar transparent />
      <main>
        <Banner query={query} setQuery={setQuery} />
        <section className="pt-20 pb-48 mx-auto">
          <div className="w-full relative flex justify-between text-center lg:w-auto lg:static lg:block lg:justify-start">
            <h3
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              Github Repo finder
            </h3>
            <div className={repositories ? "hidden" : "" + "lds-ellipsis"}>
              <div className="py-2 mt-8"></div>
              <div className="py-2 mt-8"></div>
              <div className="py-2 mt-8"></div>
            </div>
          </div>
          <div className="flex flex-wrap flex-auto mx-auto items-center justify-center">
            {repositoryComponent}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
