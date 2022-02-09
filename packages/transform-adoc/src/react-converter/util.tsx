/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Asciidoctor } from 'asciidoctor/types';
import asciidoctor from 'asciidoctor';
import { AllHtmlEntities } from 'html-entities';

import { Alert, List, ListItem, Title } from '@patternfly/react-core';
import LightbulbIcon from '@patternfly/react-icons/dist/js/icons/lightbulb-icon';
import FireIcon from '@patternfly/react-icons/dist/js/icons/fire-icon';
import { css } from '@patternfly/react-styles';
import './util.scss';

const adoc = asciidoctor();

// private CONST = 'string' + maps
const MODULE_TYPE_ATTRIBUTE = 'module-type';

// known block titles
const PREREQUISITES = 'Prerequisites';
const PROCEDURE = 'Procedure';

// node names
const OPEN = 'open';
const ADMONITION = 'admonition';
const OLIST = 'olist';
const ULIST = 'ulist';

enum AdmonitionType {
  TIP = 'TIP',
  NOTE = 'NOTE',
  IMPORTANT = 'IMPORTANT',
  WARNING = 'WARNING',
  CAUTION = 'CAUTION',
}

const admonitionToAlertVariantMap = {
  [AdmonitionType.NOTE]: { variant: 'info' },
  [AdmonitionType.TIP]: { variant: 'default', customIcon: <LightbulbIcon /> },
  [AdmonitionType.IMPORTANT]: { variant: 'danger' },
  [AdmonitionType.CAUTION]: { variant: 'warning', customIcon: <FireIcon /> },
  [AdmonitionType.WARNING]: { variant: 'warning' },
};
// end private CONST = 'string' + maps

// private utils
const getListTexts = (list: Asciidoctor.List) => {
  return list.getItems().map((listItem: Asciidoctor.ListItem) => {
    listItem.getBlocks().map((block) => {
      if (isAdmonitionBlock(block)) {
        const admonitionRendered = renderAdmonitionBlock(block, true);
        return adoc.Block.create(listItem, 'pass', {
          source: admonitionRendered,
        });
      }
    });
    // title of task's step needs to be wrapped in <p> to pick up spacing styles
    return `<p>${listItem.getText()}</p> ${listItem.getContent()}`;
  });
};

const withAdocWrapper = (Component: React.ReactNode, nodeName: string, title: string) => {
  return (
    <div className={nodeName}>
      <div className="title">{title}</div>
      {Component}
    </div>
  );
};

const renderMarkup = (component: React.ReactElement) => {
  return ReactDOMServer.renderToStaticMarkup(component);
};

const getFirstListAndIndex = (n) => {
  let procedureListIndex;
  const list = n.getBlocks().find((block, index) => {
    if (isListBlock(block)) {
      procedureListIndex = index;
      return true;
    }
  });
  return [list, procedureListIndex];
};
const convertAndConcat = (blockArr) => {
  let html = '';
  blockArr.forEach((block) => {
    html = html + block.convert();
  });
  return html;
};
// end private utils

// private block identifying helpers
const getModuleType = (node: Asciidoctor.AbstractNode) => {
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

const isProcedure = (node: Asciidoctor.AbstractNode) => {
  return getModuleType(node) === 'proc';
};

const isPrerequisites = (node: Asciidoctor.AbstractBlock) => {
  return node.getTitle && node.getTitle() === PREREQUISITES;
};

const isListBlock = (node: Asciidoctor.AbstractBlock) => {
  return node.getNodeName() === OLIST || node.getNodeName() === ULIST;
};

const isProcedureListBlock = (node: Asciidoctor.AbstractBlock) => {
  return node.getTitle && node.getTitle() === PROCEDURE && isListBlock(node);
};
// end private block identifying helpers

// public block identifying helpers
export const isAdmonitionBlock = (node: Asciidoctor.AbstractBlock) => {
  return node.getNodeName() === ADMONITION;
};

export const isTaskLevelPrereqs = (node: Asciidoctor.AbstractBlock) => {
  return isPrerequisites(node) && isListBlock(node) && isProcedure(node.getParent());
};

export const isTaskLevelProcedure = (node: Asciidoctor.AbstractBlock) => {
  return isProcedureListBlock(node) && isProcedure(node.getParent());
};

export const isOpenBlockProcedure = (n: Asciidoctor.AbstractBlock) => {
  const isOpenBlock = n.getNodeName && n.getNodeName() === OPEN;
  const isProcedureTitled = n.getTitle && n.getTitle() === PROCEDURE;
  if (isOpenBlock && isProcedureTitled) {
    return true;
  }
};
// end public block identifying helpers
// leaving here for now if design wants to revert to using card
// const renderPFNote = (node: Asciidoctor.AbstractBlock, inList: boolean = false) => {
//   const noteTitle = (node.getAttribute && node.getAttribute('textlabel')) || 'Note';
//   const classNames = {
//     inList: {
//       card: 'task-pflist-list__item__content__note',
//       cardBody: 'task-pflist-list__item__content__note__body',
//     },
//     inDescription: {
//       card: 'description-note',
//       cardBody: 'description-note__body',
//     },
//   };
//   const note = (
//     <Card
//       isPlain
//       isFlat
//       isCompact
//       className={css(inList && classNames.inList.card, !inList && classNames.inDescription.card)}
//     >
//       <CardBody
//         className={css(
//           inList && classNames.inList.cardBody,
//           !inList && classNames.inDescription.cardBody,
//         )}
//       >
//         <strong>{noteTitle}:</strong> {node.getContent()}
//       </CardBody>
//     </Card>
//   );
//   // Don't render to markup yet, will be passed through by parent
//   return ReactDOMServer.renderToString(note);
// };

// public renderers
export const renderAdmonitionBlock = (node: Asciidoctor.AbstractBlock, inList: boolean) => {
  const admonitionType = node.getAttribute('style');
  const { variant, customIcon } = admonitionToAlertVariantMap[admonitionType];
  const style = admonitionType === AdmonitionType.CAUTION ? { backgroundColor: '#ec7a0915' } : {};

  const pfAlert = (
    <Alert
      variant={variant}
      customIcon={customIcon && customIcon}
      isInline
      title={admonitionType}
      className={css(!inList && 'description-important')}
      style={style}
    >
      {/* use html-entities decode to remove special encoding done by asciidoctor
      dangerouslySetInnerHTML so tags like <code> are passed as HTML instead of html encoded string */}
      <span dangerouslySetInnerHTML={{ __html: AllHtmlEntities.decode(node.getContent()) }} />
    </Alert>
  );
  // needs an extra wrapper as procedure-parser looks for innerhtml in guides
  return ReactDOMServer.renderToString(<div>{pfAlert}</div>);
};

export const renderPFList = (
  list: Asciidoctor.List,
  title?: string,
  blocksBefore?: string,
  blocksAfter?: string,
) => {
  const listTitle = title || list.getTitle();
  const listType = list.getNodeName();
  const isPrereqList = listTitle === PREREQUISITES;
  const isProcList = listTitle === PROCEDURE;
  const listComponentType = listType === 'olist' ? 'ol' : 'ul';
  const listTexts: string[] = getListTexts(list);
  const blocksBeforeComponent = blocksBefore && (
    <div dangerouslySetInnerHTML={{ __html: blocksBefore }} />
  );
  const blocksAfterComponent = blocksAfter && (
    <div dangerouslySetInnerHTML={{ __html: blocksAfter }} />
  );
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
      {blocksBeforeComponent}
      <List
        component={listComponentType}
        className={css(
          'task-pflist-list',
          isPrereqList && 'task-pflist-list--prereq',
          isProcList && 'task-pflist-list--proc',
        )}
      >
        {listTexts.map((text) => (
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
      {blocksAfterComponent}
    </div>
  );
  const reactList = withAdocWrapper(PFList, listType, listTitle);
  return renderMarkup(reactList);
};

export const renderOpenBlockPFList = (node: Asciidoctor.AbstractBlock) => {
  const [procedure, index] = getFirstListAndIndex(node);
  const blocksBefore = node.getBlocks().slice(0, index);
  const blocksAfter = node.getBlocks().slice(index + 1);
  return renderPFList(
    procedure as Asciidoctor.List,
    'Procedure',
    convertAndConcat(blocksBefore),
    convertAndConcat(blocksAfter),
  );
};
// end public renderers
