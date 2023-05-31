import React from 'react'
import Header from './../../components/header/Header';
import Banner from './../../components/banner/Banner';
import Main from './../../components/main/Main';
import Footer from './../../components/footer/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
      {/* {posts.map(post => <p key={post.id}>{post.title}</p>)} */}
    </>
  )
}
