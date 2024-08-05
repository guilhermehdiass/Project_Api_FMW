import { useState, useEffect } from 'react';
import Card from '../card';
import Header from '../header';
import styles from './Container.module.css';

const Container = () => {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const response = await fetch('./senaker.json');
      const data = await response.json();
      setRepositories(data);
      setFilteredRepos(data);
    };
    fetchRepositories();
  }, []);

  const handleSearch = (query) => {
    setFilteredRepos(
      repositories.filter(repo =>
        repo.modelo.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleFilterGender = (gender) => {
    setFilteredRepos(
      repositories.filter(repo => 
        gender === 'all' ? true : repo.publico.toLowerCase() === gender
      )
    );
  };

  const handleFilterBrand = (brand) => {
    setFilteredRepos(
      repositories.filter(repo => 
        brand === 'all' ? true : repo.marca.toLowerCase() === brand
      )
    );
  };

  return (
    <>
      <Header
        onSearch={handleSearch}
        onFilterGender={handleFilterGender}
        onFilterBrand={handleFilterBrand}
      />
      <div className={styles.container}>
        {filteredRepos.length > 0 ? (
          <section className={styles.lista}>
            {filteredRepos.map((repo) => (
              <Card
                key={repo.id}
                tamanho={repo.tamanho}
                modelo={repo.modelo}
                publico={repo.publico}
                marca={repo.marca}
                cor={repo.cor}
                preco={repo.preco}
                imagem={repo.imagem}
                descricao={repo.descricao}
                ativo={repo.ativo}
              />
            ))}
          </section>
        ) : (
          <p className={styles.loading}>Carregando repositórios...</p>
        )}
      </div>
    </>
  );
};

export default Container;
