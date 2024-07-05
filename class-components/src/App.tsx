import React from 'react';
import { FilmResult } from './api/getSWFilms';
import ErrorBoundary from './components/ErrorBoundary';
import FilmsList from './components/FilmsList';
import Search from './components/Search';
import BugComponent from './components/BugComponent';
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
    return (
      <>
        <ErrorBoundary>
          <Search updateFilmsData={this.updateFilmsData} />
          <FilmsList
            filmsData={this.state.filmsData}
            updateFilmsData={this.updateFilmsData}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <BugComponent />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
