import React from "react";
import { FormattedMessage } from "react-intl";

class MenuItemText extends React.Component {
  render() {
    const { item, parentItem } = this.props;

    return (
      <>
        {item.icon && (
          <i
            style={{ fontSize: "30px" }}
            className={`kt-menu__link-icon p-3 ${item.icon}`}
          />
        )}

        {parentItem && parentItem.bullet === "dot" && (
          <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
            <span />
          </i>
        )}

        {parentItem && parentItem.bullet === "line" && (
          <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
            <span />
          </i>
        )}

        {/** ADDED TO INDICATE ONLY ICON ITEM FEATURE */}
        {!item["icon-only"] && (
          <span className="kt-menu__link-text" style={{ whiteSpace: "nowrap" }}>
            {!item.translate ? (
              item.title
            ) : (
              <FormattedMessage
                id={item.translate}
                defaultMessage={item.title}
              />
            )}
          </span>
        )}

        {item.badge && (
          <span className="kt-menu__link-badge">
            <span className={`kt-badge ${item.badge.type}`}>
              {item.badge.value}
            </span>
          </span>
        )}

        {/*{item.submenu && <i className="kt-menu__ver-arrow la la-angle-right" />}*/}
      </>
    );
  }
}

export default MenuItemText;
