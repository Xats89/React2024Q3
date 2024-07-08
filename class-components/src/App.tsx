import React from 'react';
import { FilmResult } from './api/getSWFilms';
import ErrorBoundary from './components/ErrorBoundary';
import FilmsList from './components/FilmsList';
import Search from './components/Search';
import BugComponent from './components/BugComponent';
import Spinner from './components/Spinner';
import './App.scss';

interface AppProps {}

interface AppState {
  filmsData: FilmResult[] | [];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      filmsData: [],
    };
    this.updateFilmsData = this.updateFilmsData.bind(this);
  }

  updateFilmsData(data: FilmResult[]) {
    this.setState({ filmsData: data });
  }

  render(): React.ReactNode {
    const { filmsData } = this.state;
    const spinner = !filmsData ? <Spinner /> : null;
    const filmsList = filmsData ? (
      <FilmsList
        filmsData={this.state.filmsData}
        updateFilmsData={this.updateFilmsData}
      />
    ) : null;

    return (
      <>
        <ErrorBoundary>
          <Search updateFilmsData={this.updateFilmsData} />
          {spinner}
          {filmsList}
        </ErrorBoundary>
        <ErrorBoundary>
          <BugComponent />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
