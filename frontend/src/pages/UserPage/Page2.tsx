import { useOnboarding} from "../../context/onBoardingContext";
import AboutMe from '../../components/aboutmefield';
import Address from '../../components/addressfield'
import Birthdate from '../../components/birthdate';

const Page2 = () => {
  const { config, loading } = useOnboarding();

  if (loading) return <p>Loading...</p>;
  if (!config) return <p>Error loading configuration</p>;

  return (
    <div>
      <h2>Step 2</h2>
      {config.step2.includes('aboutMe') && <AboutMe value={""} onChange={function (value: string): void {
        throw new Error("Function not implemented.");
      } } />}
      {config.step2.includes('address') && <Address value={undefined} onChange={function (value: Address): void {
        throw new Error("Function not implemented.");
      } } />}
      {config.step2.includes('birthdate') && <Birthdate value={""} onChange={function (value: string): void {
        throw new Error("Function not implemented.");
      } } />}
    </div>
  );
};

export default Page2;