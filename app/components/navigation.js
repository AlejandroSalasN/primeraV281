import Link from "next/link"
import styles from "./navigation.module.css";

const links = [{
    label: 'INICIO',
    route: '/'
  },
  {
    label: 'ACTIVIDADES',
    route: '/actividades'
  },
  {
    label: 'CONTACTO',
    route: '/contacto'
  },
  {
    label: 'PREGUNTAS',
    route: '/preguntas-frecuentes'
  },
  {
    label: 'REGISTRO',
    route: 'inicio-de-sesion'
  }
]

const Navigation = () => {
    return (
        <header className={styles.header}>
          <nav>
            <ul className={styles.navigation}>
              {links.map(({label, route}) => (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    );
}

export default Navigation;