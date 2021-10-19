import { Asciidoctor } from 'asciidoctor/types';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

const MODULE_TYPE_ATTRIBUTE = 'module-type';

export const getModuleType = (node: Asciidoctor.AbstractNode) => {
  if (node.getAttributes()[MODULE_TYPE_ATTRIBUTE]) {
    return node.getAttributes()[MODULE_TYPE_ATTRIBUTE];
  }

  const id = node.getId();

  if (id && id.startsWith('con-')) {
    return 'con';
  }

  if (id && id.startsWith('proc-')) {
    return 'proc';
  }

  if (id && id.startsWith('ref-')) {
    return 'ref';
  }
  return 'unknown'; // punt, we don't know
};

export const isProcedure = (node: Asciidoctor.AbstractNode) => {
  return getModuleType(node) === 'proc';
};

export const isPrerequisites = (node: Asciidoctor.AbstractBlock) => {
  return node.getTitle && node.getTitle() === 'Prerequisites';
};

export const isList = (node: Asciidoctor.AbstractBlock) => {
  return node.getNodeName() === 'olist' || node.getNodeName() === 'ulist';
};

export const getListTexts = (list: Asciidoctor.List) => {
  return list.getItems().map((listItem: Asciidoctor.ListItem) => {
    return listItem.getText();
  });
};

export const isTaskLevelPrereqs = (node: Asciidoctor.AbstractBlock) => {
  return isPrerequisites(node) && isList(node) && isProcedure(node.getParent());
};

export const renderMarkup = (component: any) => {
  return ReactDOMServer.renderToStaticMarkup(component);
};

export const renderPFList = (list: Asciidoctor.List) => {
  const listTitle = list.getTitle();
  const prereqTexts: string[] = getListTexts(list);
  const preReqReact = (
    <div className="ulist">
      <div className="title">{listTitle}</div>
      <List>
        {prereqTexts.map((text) => (
          <ListItem key={text}>{text}</ListItem>
        ))}
      </List>
    </div>
  );
  return renderMarkup(preReqReact);
};
