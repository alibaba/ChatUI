import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navConfig } from '../navConfig';
import { toPascalCase } from '../utils';

export default function DemoIndex() {
  useEffect(() => {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      console.log(e.matches);
      // document.documentElement.dataset.colorScheme = e.matches ? 'dark' : 'light';
    };

    colorSchemeQuery.addEventListener('change', handleColorSchemeChange);
    handleColorSchemeChange(colorSchemeQuery);
  }, []);

  return (
    <div className="demo-index">
      {navConfig.map((t) => (
        <div className="demo-nav" key={t.title}>
          <h2 className="demo-nav-title">{t.title}</h2>
          <ul className="demo-nav-list">
            {t.list.map((tt) => (
              <li key={tt.code}>
                <Link className="demo-nav-link" to={`/${tt.code}`}>
                  {`${toPascalCase(tt.code)} ${tt.name}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
