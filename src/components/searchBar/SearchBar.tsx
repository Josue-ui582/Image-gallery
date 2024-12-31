
import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import styles from './SearchBar.module.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 300);

    React.useEffect(() => {
        onSearch(debouncedValue);
    }, [debouncedValue, onSearch]);

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Recherchez une image de votre choix"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;