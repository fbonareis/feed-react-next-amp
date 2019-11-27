import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import 'isomorphic-fetch';
import styled from 'styled-components';

export default class Home extends Component {
  static getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return { feed: await response.json() };
  };

  render() {
    return (
      <>
        <Head>
          <title>Feed List</title>
        </Head>
        <Container>
          {this.props.feed.map(item => (
            <article key={item.id}>
              <Link href="/post/[pid]" as={`/post/${item.id}`}>
                <a>
                  <h1>{item.title}</h1>
                </a>
              </Link>
              <p>{item.body}</p>
            </article>
          ))}
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  article {
    padding: 15px;
    border-bottom: 1px solid #ccc;

    a {
      text-decoration: none;
      color: black;
      transition: 300ms all;

      &:hover {
        opacity: 0.7;
        display: block;
      }
    }
  }
`;
