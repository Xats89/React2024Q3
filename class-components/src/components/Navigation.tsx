import { NavLink } from 'react-router-dom';

const routes = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'People',
    to: '/people/',
  },
  {
    title: 'Films',
    to: '/films/',
  },
];
export default function Navigation() {
    return (
      <div className="navigation">
      {routes.map((route) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navigation__link_active' : 'navigation__link'
            }
            key={`route-${route.title}`}
            to={route.to}
          >
            {route.title}
          </NavLink>
        );
      })}
    </div>

  )
}