import { useState } from 'react';
import styles from './Header.module.css';

const Header = ({ onSearch, onFilterGender, onFilterBrand }) => {
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('all');
  const [brand, setBrand] = useState('all');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    if (onFilterGender) onFilterGender(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    if (onFilterBrand) onFilterBrand(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>logo</p>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.filters}>
        <select value={gender} onChange={handleGenderChange} className={styles.filter}>
          <option value="all">Todos</option>
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
        </select>
        <select value={brand} onChange={handleBrandChange} className={styles.filter}>
          <option value="all">Todas as marcas</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
