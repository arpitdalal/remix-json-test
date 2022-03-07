import { Link } from 'remix';

export default function Index() {
  return <Link to="/route?redirectTo=/">Go to route</Link>;
}
