import { Header } from '../components/header';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        <p>Main Content</p>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
