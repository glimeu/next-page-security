import { useRouter } from 'next/router';

import { SimplePage } from '../../components/simple-page';

export default function Class() {
  const router = useRouter();
  const className = router.query.class;

  return <SimplePage>Class - {className}</SimplePage>;
}
