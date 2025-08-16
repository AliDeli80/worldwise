import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <img
          src={`https://flagcdn.com/24x18/${country.flag}.png`}
          alt={`Flag of ${country}`}
          style={{ width: "24px", height: "16px", objectFit: "cover" }}
        />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
