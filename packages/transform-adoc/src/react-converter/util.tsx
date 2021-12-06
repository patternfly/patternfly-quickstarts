import { Asciidoctor } from 'asciidoctor/types';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { Alert, Card, CardBody, List, ListItem, Title } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import './util.scss';

const MODULE_TYPE_ATTRIBUTE = 'module-type';
const PREREQUISITES = 'Prerequisites';
const PROCEDURE = 'Procedure';
const IMPORTANT = 'IMPORTANT';
const NOTE = 'NOTE';

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

export const isListBlock = (node: Asciidoctor.AbstractBlock) => {
  return node.getNodeName() === 'olist' || node.getNodeName() === 'ulist';
};

export const isImportantBlock = (node: Asciidoctor.AbstractBlock) => {
  return node.getAttribute('style') === IMPORTANT;
};

export const isNoteBlock = (node: Asciidoctor.AbstractBlock) => {
  return node.getAttribute('style') === NOTE;
};

export const renderMarkup = (component: React.ReactElement) => {
  return ReactDOMServer.renderToStaticMarkup(component);
};

export const renderPFImportant = (node: Asciidoctor.AbstractBlock) => {
  const inlineWarningAlert = <Alert variant="warning" isInline title={node.getContent()} />;
  // Don't render to markup yet, will be passed through by parent
  return ReactDOMServer.renderToString(inlineWarningAlert);
};

export const renderPFNote = (node: Asciidoctor.AbstractBlock) => {
  const noteTitle = (node.getAttribute && node.getAttribute('textlabel')) || 'Note';
  const note = (
    <Card isPlain isFlat isCompact className="task-pflist-list__item__content__note">
      <CardBody className="task-pflist-list__item__content__note__body">
        <strong>{noteTitle}:</strong> {node.getContent()}
      </CardBody>
    </Card>
  );
  // Don't render to markup yet, will be passed through by parent
  return ReactDOMServer.renderToString(note);
};

export const getListTexts = (list: Asciidoctor.List) => {
  let importantBlock: Asciidoctor.AbstractBlock, noteBlock: Asciidoctor.AbstractBlock;
  return list.getItems().map((listItem: Asciidoctor.ListItem) => {
    importantBlock = listItem.getBlocks().find((block) => {
      return isImportantBlock(block);
    });
    noteBlock = listItem.getBlocks().find((block) => {
      return isNoteBlock(block);
    });
    if (importantBlock) {
      const importantRendered = renderPFImportant(importantBlock);
      return listItem.setText(listItem.getText() + importantRendered);
    }
    if (noteBlock) {
      const noteRendered = renderPFNote(noteBlock);
      return listItem.setText(listItem.getText() + noteRendered);
    }
    return listItem.getText();
  });
};

export const isTaskLevelPrereqs = (node: Asciidoctor.AbstractBlock) => {
  return isPrerequisites(node) && isListBlock(node) && isProcedure(node.getParent());
};

export const isProcedureListBlock = (node: Asciidoctor.AbstractBlock) => {
  return node.getTitle && node.getTitle() === PROCEDURE && isListBlock(node);
};

export const isTaskLevelProcedure = (node: Asciidoctor.AbstractBlock) => {
  return isProcedureListBlock(node) && isProcedure(node.getParent());
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
