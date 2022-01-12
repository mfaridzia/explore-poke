import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/lib/apolloClient";
import Layout from "src/components/Layouts/MainLayout";
import "src/styles/globals.css";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
