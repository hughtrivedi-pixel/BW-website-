import { Helmet } from "react-helmet-async";

const JsonLd = ({ data }: { data: object }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
);

export default JsonLd;
