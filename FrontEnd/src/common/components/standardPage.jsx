import React from "react";
import BreadCrumb from "./breadCrumb/breadCrumb";
import BreadCrumbItem from "./breadCrumb/breadCrumbItem";
import BreadCrumbItemWithLink from "./breadCrumb/breadCrumbItemWithLink";
import ContentHeader from "./content/contentHeader";
import ContentWrapper from "./content/contentWrapper";
import Content from "./content/content";
import Grid from "./layout/grid";
import Row from "./layout/row";
import Footer from "./footer/footer";

export default props => (
  <React.Fragment>
    <ContentWrapper>
      <ContentHeader title={props.title} subTitle={props.subTitle}>
        <BreadCrumb>
          <BreadCrumbItemWithLink
            label={props.breadMain}
            path={props.breadLink}
          />
          <BreadCrumbItem label={props.breadItem} />
        </BreadCrumb>
      </ContentHeader>

      <Content>
        <Row>
          <Grid cols="12 12">{props.children}</Grid>
        </Row>
      </Content>
    </ContentWrapper>
    <Footer />
  </React.Fragment>
);
