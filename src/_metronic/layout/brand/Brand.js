/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as builder from "../../ducks/builder";
import { toAbsoluteUrl } from "../../utils/utils";

class Brand extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
  }

  render() {
    return (
      <div
        className={`kt-aside__brand kt-grid__item ${this.props.brandClasses}`}
        id="kt_aside_brand"
      >
        <div className="kt-aside__brand-logo">
          <Link to="">
            <img
              style={{ height: "50px" }}
              alt="logo"
              src={toAbsoluteUrl("/media/logos/thyssenkrupp-logo-white.png")}
            />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    brandClasses: builder.selectors.getClasses(store, {
      path: "brand",
      toString: true,
    }),
  };
};

export default connect(mapStateToProps)(Brand);
