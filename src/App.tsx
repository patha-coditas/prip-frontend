import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import ApplicationFormPage from "./pages/ApplicationForm/ApplicationForm";

const App = () => {
  return (
    <main className={styles.App}>
      <Header />
      <ApplicationFormPage />
    </main>
  );
};

export default App;
