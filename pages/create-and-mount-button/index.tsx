import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="create-and-mount-button/stitches-core">Stitches Core</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/stitches-react">Stitches React</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/stitches-react-v019">Stitches React v0.1.9</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}