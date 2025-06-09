import { useAtom } from 'jotai';
import atoms from '../../util/atoms';

function InstagramSVG({
  disableDarkMode,
  white,
}: {
  disableDarkMode: boolean;
  white: boolean;
}) {
  const [darkMode] = useAtom(atoms.darkMode);
  return (
    <svg
      aria-label="InstaCarGram"
      color={`${disableDarkMode ? '#262626' : darkMode ? '' : '#262626'} ${
        white ? '#000 !important' : ''
      }`}
      fill="currentColor"
      role="img"
      viewBox="0 0 200 40"
      width="103"
      height="40"
    >
      <text
        x="5"
        y="30"
        fontSize="26"
        fontWeight="700"
        fill="currentColor"
        fontFamily="'Billabong', 'Segoe UI', Arial, sans-serif"
        letterSpacing="0.5"
        style={{
          fontStyle: 'normal',
          fontVariant: 'normal',
          textRendering: 'optimizeLegibility'
        }}
      >
        InstaCarGram
      </text>
    </svg>
  );
}

export default InstagramSVG;
