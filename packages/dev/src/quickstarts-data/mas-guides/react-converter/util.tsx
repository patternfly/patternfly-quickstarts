import { Asciidoctor } from 'asciidoctor/types';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { List, ListItem, Title } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';

const MODULE_TYPE_ATTRIBUTE = 'module-type';
const PREREQUISITES = 'Prerequisites';
const PROCEDURE = 'Procedure';

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
  return node.getTitle && node.getTitle() === PREREQUISITES;
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

export const isProcedureListBlock = (node: Asciidoctor.AbstractBlock) => {
  return node.getTitle && node.getTitle() === PROCEDURE && isList(node);
};

export const isTaskLevelProcedure = (node: Asciidoctor.AbstractBlock) => {
  return isProcedureListBlock(node) && isProcedure(node.getParent());
};

export const renderMarkup = (component: React.ReactElement) => {
  return ReactDOMServer.renderToStaticMarkup(component);
};

export const withAdocWrapper = (Component: React.ReactNode, nodeName: string, title: string) => {
  return (
    <div className={nodeName}>
      <div className="title">{title}</div>
      {Component}
    </div>
  );
};

export const renderPFList = (list: Asciidoctor.List) => {
  const listTitle = list.getTitle();
  const listType = list.getNodeName();
  const isPrereqList = listTitle === PREREQUISITES;
  const isProcList = listTitle === PROCEDURE;
  const listComponentType = listType === 'olist' ? 'ol' : 'ul';
  const prereqTexts: string[] = getListTexts(list);
  const PFList = (
    <div className="task-pflist">
      <Title headingLevel="h6" className="task-pflist-title">
        {listTitle}
      </Title>
      {isPrereqList && (
        <p className="task-pflist-subtitle">
          In addtion to the prerequisites for this Quick Start, this step requires:
        </p>
      )}
      <List
        component={listComponentType}
        className={css(
          'task-pflist-list',
          isPrereqList && 'task-pflist-list--prereq',
          isProcList && 'task-pflist-list--proc',
        )}
      >
        {prereqTexts.map((text) => (
          <ListItem
            className={css(
              isPrereqList && 'task-pflist-list__item--prereq',
              isProcList && 'task-pflist-list__item--proc',
              'task-pflist-list__item',
            )}
            key={text}
          >
            <span
              className="task-pflist-list__item__content"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const preReqReact = withAdocWrapper(PFList, listType, listTitle);
  return renderMarkup(preReqReact);
};
