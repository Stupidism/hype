import React from 'react';

import styled from 'styled-components';
import { environment } from '../environments/environment';

const StyledApp = styled.div`
  /*
 * Remove template code below
 */

  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto;

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    padding: 5px;
    border-radius: 3px;

    > img {
      width: 60px;
      height: 40px;
      margin-right: 50px;
    }
  }

  main {
    padding: 0 36px;

    h1 {
      text-align: center;
      margin-left: 18px;
      font-size: 24px;
    }
  }

  footer {
    select {
      float: right;
    }

    ::after {
      content: ' ';
      display: block;
      clear: both;
    }
  }
`;

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <StyledApp>
      <header className="flex">
        <img src="/assets/hype-logo.png" alt="Hype Logo White" />
        <h1>Welcome to lucas! [{environment.production ? 'PROD' : 'DEV'}]</h1>
      </header>
      <main>
        <h1>
          HYPE is a team of passionate Venture Builders that help Startups
          demystify, unlock, and succeed in Asia.
        </h1>
      </main>
      <footer>
        <select name="locale" id="locale-selector">
          <option value="en-US">English</option>
          <option value="zh-CN">简体中文</option>
          <option value="zh-HK">繁体中文</option>
        </select>
      </footer>
    </StyledApp>
  );
};

export default Index;
