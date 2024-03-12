// --- component

import Header from "presentation/component/organism/Header";
import Footer from "presentation/component/organism/Footer";
import SectionSubscription from "presentation/component/organism/SectionSubscription";

// --- start default
const Default = (props) => {
  const { subscription = true, children } = props;

  return (
    <>
      <Header />
      <div className="main">{children}</div>
      {subscription ? <SectionSubscription /> : null}
      <Footer />
    </>
  );
};

export default Default;
