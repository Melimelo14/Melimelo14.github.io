import { resolveNotionPage } from "../lib/resolve-notion-page";
import { Page404 } from "../components";
import { domain } from "../lib/config";

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain);

    return {
      props,
    };
  } catch (err) {
    console.error("page error", domain, err);

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err;
  }
};

export default Page404;
