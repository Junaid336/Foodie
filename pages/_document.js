import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link
             rel="stylesheet"
             href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link href="/css/bootstrap.min.css" rel="stylesheet" />
            <link href="/css/animsition.min.css" rel="stylesheet" />
            <link href="/css/animate.css" rel="stylesheet" />
            <link href="/css/style.css" rel="stylesheet" />
            <link href="/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <body className='home'>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
          <script src="/js/jquery.min.js"></script>
          <script src="/js/tether.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/animsition.min.js"></script>
          <script src="/js/bootstrap-slider.min.js"></script>
          <script src="/js/jquery.isotope.min.js"></script>
          <script src="/js/headroom.js"></script>
          <script src="/js/foodpicky.min.js"></script>
          <script src="https://kit.fontawesome.com/e4cc42537b.js" crossorigin="anonymous"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument