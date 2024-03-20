import Navbar from './_components/Navbar/Navbar';
import { getFetchData } from '@/utils/fetchingData';

const Header = async ({ params: { lang } }) => {
  const storyData = await getFetchData(lang);

  return (
    <header>
      <Navbar fetchedData={storyData.nav_section} lang={lang} />
    </header>
  );
};
export default Header;
