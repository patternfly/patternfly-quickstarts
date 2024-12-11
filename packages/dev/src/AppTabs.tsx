import './App.css';
import {
  Page,
  Button,
  Drawer,
  DrawerContent,
  Tabs,
  Tab,
  TabTitleText,
  DrawerContentBody,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelDescription,
  DrawerPanelBody,
  DropdownList,
  DropdownItem,
  TabContent,
  TabContentBody,
} from '@patternfly/react-core';
import {
  LoadingBox,
  QuickStartContainer,
  QuickStartContainerProps,
  QuickStartController,
  QuickStartCloseModal,
  QuickStartStatus,
  useLocalStorage,
  setQueryArgument,
  removeQueryArgument,
  QUICKSTART_ID_FILTER_KEY,
} from '@patternfly/quickstarts';
import { allQuickStarts as yamlQuickStarts } from './quickstarts-data/quick-start-test-data';
import React from 'react';
import i18n from './i18n/i18n';
import { AppHeader, AppSidebar } from './common/Page';

import Chatbot, { ChatbotDisplayMode } from '@patternfly/chatbot/dist/dynamic/Chatbot';
import ChatbotContent from '@patternfly/chatbot/dist/dynamic/ChatbotContent';
import ChatbotWelcomePrompt from '@patternfly/chatbot/dist/dynamic/ChatbotWelcomePrompt';
import ChatbotFooter, { ChatbotFootnote } from '@patternfly/chatbot/dist/dynamic/ChatbotFooter';
import MessageBar from '@patternfly/chatbot/dist/dynamic/MessageBar';
import MessageBox from '@patternfly/chatbot/dist/dynamic/MessageBox';
import Message, { MessageProps } from '@patternfly/chatbot/dist/dynamic/Message';
import ChatbotHeader, {
  ChatbotHeaderMain,
  ChatbotHeaderTitle,
  ChatbotHeaderActions,
  ChatbotHeaderSelectorDropdown,
} from '@patternfly/chatbot/dist/dynamic/ChatbotHeader';

import { welcomePrompts, footnoteProps, initialMessages } from './AppTabsStrings';

interface AppProps {
  children?: React.ReactNode;
  showCardFooters?: boolean;
}

const App: React.FC<AppProps> = ({ children, showCardFooters }) => {
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});
  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  // eslint-disable-next-line no-console
  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);
  React.useEffect(() => {
    // callback on state change
    // eslint-disable-next-line no-console
    console.log(allQuickStartStates);
  }, [allQuickStartStates]);

  const withQueryParams = true;

  const containerProps: QuickStartContainerProps = {
    quickStarts: yamlQuickStarts,
    activeQuickStartID,
    allQuickStartStates,
    setActiveQuickStartID,
    setAllQuickStartStates,
    resourceBundle,
    showCardFooters,
    language,
    useQueryParams: withQueryParams,
    alwaysShowTaskReview: true,
    markdown: {
      extensions: [
        // variable substitution
        {
          type: 'output',
          filter(html: string) {
            html = html.replace(/\[APPLICATION\]/g, 'Mercury');
            html = html.replace(/\[PRODUCT\]/g, 'Lightning');

            return html;
          },
        },
      ],
    },
  };

  const toggleQuickStart = (quickStartId: string) => {
    if (activeQuickStartID !== quickStartId) {
      // activate
      setActiveQuickStartID(quickStartId);
      setActiveTabKey(1);
      // optionally add the query param
      withQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, quickStartId);
    } else {
      // deactivate
      setActiveQuickStartID('');
      // optionally remove the query param
      withQueryParams && removeQueryArgument(QUICKSTART_ID_FILTER_KEY);
    }
  };

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const onClose = () => {
    setActiveQuickStartID('');
    setIsDrawerOpen(false);
  };
  const handleClose = (activeQuickStartStatus: string | number) => {
    // need to hook up to modal close button
    if (activeQuickStartStatus === QuickStartStatus.IN_PROGRESS) {
      setModalOpen(true);
    } else {
      onClose();
    }
    onClose();
  };
  const onModalConfirm = () => {
    setModalOpen(false);
    onClose();
  };
  const onModalCancel = () => setModalOpen(false);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(1);
  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number,
  ) => {
    setActiveTabKey(tabIndex);
  };

  // needed for QuickStartController and metadata filling out
  // we're basically rendering the QS on the user code opposed to QuickStartPanelContent
  const quickStart = yamlQuickStarts.find((qs) => qs.metadata.name === activeQuickStartID);
  const nextQuickStart = yamlQuickStarts.filter((qs) =>
    quickStart?.spec.nextQuickStart?.includes(qs.metadata.name),
  );

  // Chatbot
  const [messages, setMessages] = React.useState<MessageProps[]>(initialMessages);
  const [selectedModel, setSelectedModel] = React.useState('Granite 7B');
  const [isSendButtonDisabled, setIsSendButtonDisabled] = React.useState(false);
  const [announcement, setAnnouncement] = React.useState<string>();
  const scrollToBottomRef = React.useRef<HTMLDivElement>(null);

  const displayMode = ChatbotDisplayMode.embedded;

  React.useEffect(() => {
    // don't scroll the first load - in this demo, we know we start with two messages
    if (messages.length > 2) {
      scrollToBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const onSelectModel = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    value: string | number | undefined,
  ) => {
    setSelectedModel(value as string);
  };

  // you will likely want to come up with your own unique id function; this is for demo purposes only
  const generateId = () => {
    const id = Date.now() + Math.random();
    return id.toString();
  };

  const handleSend = (message: string) => {
    setIsSendButtonDisabled(true);
    const newMessages: MessageProps[] = [];
    // We can't use structuredClone since messages contains functions, but we can't mutate
    // items that are going into state or the UI won't update correctly
    messages.forEach((message) => newMessages.push(message));
    // It's important to set a timestamp prop since the Message components re-render.
    // The timestamps re-render with them.
    const date = new Date();
    newMessages.push({
      id: generateId(),
      role: 'user',
      content: message,
      name: 'User',
      avatar: null,
      timestamp: date.toLocaleString(),
      avatarProps: { isBordered: true },
    });
    newMessages.push({
      id: generateId(),
      role: 'bot',
      content: 'API response goes here',
      name: 'Bot',
      avatar: null,
      isLoading: true,
      timestamp: date.toLocaleString(),
    });
    setMessages(newMessages);
    // make announcement to assistive devices that new messages have been added
    setAnnouncement(`Message from User: ${message}. Message from Bot is loading.`);

    // this is for demo purposes only; in a real situation, there would be an API response we would wait for
    setTimeout(() => {
      const loadedMessages: MessageProps[] = [];
      // we can't use structuredClone since messages contains functions, but we can't mutate
      // items that are going into state or the UI won't update correctly
      newMessages.forEach((message) => loadedMessages.push(message));
      loadedMessages.pop();
      loadedMessages.push({
        id: generateId(),
        role: 'bot',
        content: 'API response goes here',
        name: 'Bot',
        avatar: null,
        isLoading: false,
        actions: {
          // eslint-disable-next-line no-console
          positive: { onClick: () => console.log('Good response') },
          // eslint-disable-next-line no-console
          negative: { onClick: () => console.log('Bad response') },
          // eslint-disable-next-line no-console
          copy: { onClick: () => console.log('Copy') },
          // eslint-disable-next-line no-console
          share: { onClick: () => console.log('Share') },
          // eslint-disable-next-line no-console
          listen: { onClick: () => console.log('Listen') },
        },
        timestamp: date.toLocaleString(),
      });
      setMessages(loadedMessages);
      // make announcement to assistive devices that new message has loaded
      setAnnouncement(`Message from Bot: API response goes here`);
      setIsSendButtonDisabled(false);
    }, 5000);
  };

  const chatbot = (
    <Chatbot displayMode={displayMode}>
      <ChatbotHeader>
        <ChatbotHeaderMain>
          <ChatbotHeaderTitle>Title</ChatbotHeaderTitle>
        </ChatbotHeaderMain>
        <ChatbotHeaderActions>
          <ChatbotHeaderSelectorDropdown value={selectedModel} onSelect={onSelectModel}>
            <DropdownList>
              <DropdownItem value="Granite 7B" key="granite">
                Granite 7B
              </DropdownItem>
              <DropdownItem value="Llama 3.0" key="llama">
                Llama 3.0
              </DropdownItem>
              <DropdownItem value="Mistral 3B" key="mistral">
                Mistral 3B
              </DropdownItem>
            </DropdownList>
          </ChatbotHeaderSelectorDropdown>
        </ChatbotHeaderActions>
      </ChatbotHeader>
      <ChatbotContent>
        {/* Update the announcement prop on MessageBox whenever a new message is sent
                 so that users of assistive devices receive sufficient context  */}
        <MessageBox announcement={announcement}>
          <ChatbotWelcomePrompt
            title="Hello, Chatbot User"
            description="How may I help you today?"
            prompts={welcomePrompts}
          />
          {/* This code block enables scrolling to the top of the last message.
                  You can instead choose to move the div with scrollToBottomRef on it below 
                  the map of messages, so that users are forced to scroll to the bottom.
                  If you are using streaming, you will want to take a different approach; 
                  see: https://github.com/patternfly/chatbot/issues/201#issuecomment-2400725173 */}
          {messages.map((message, index) => {
            if (index === messages.length - 1) {
              return (
                <>
                  <div ref={scrollToBottomRef}></div>
                  <Message key={message.id} {...message} />
                </>
              );
            }
            return <Message key={message.id} {...message} />;
          })}
        </MessageBox>
      </ChatbotContent>
      <ChatbotFooter>
        <MessageBar
          onSendMessage={handleSend}
          hasMicrophoneButton
          isSendButtonDisabled={isSendButtonDisabled}
        />
        <ChatbotFootnote {...footnoteProps} />
      </ChatbotFooter>
    </Chatbot>
  );
  // Chatbot

  const contentRef1 = React.createRef<HTMLElement>();
  const contentRef2 = React.createRef<HTMLElement>();

  const panelContent = (
    <DrawerPanelContent isResizable>
      <DrawerHead>
        <span>{activeQuickStartID !== '' ? quickStart?.spec.displayName : 'No QS title'}</span>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setIsDrawerOpen(false)} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelDescription>Drawer panel description</DrawerPanelDescription>
      <DrawerPanelBody
        style={{ display: 'flex', flexDirection: 'column' } /** need for footer spacing */}
      >
        <Tabs
          activeKey={activeTabKey}
          onSelect={handleTabClick}
          aria-label="Tabs in a drawer"
          role="region"
        >
          {activeQuickStartID !== '' && (
            <Tab
              eventKey={1}
              title={<TabTitleText>Quickstart</TabTitleText>}
              aria-label="Default content - users"
              tabContentId="tab1SectionBodyPadding"
              tabContentRef={contentRef1}
            />
          )}

          <Tab
            eventKey={2}
            title={<TabTitleText>Chatbot</TabTitleText>}
            tabContentId="tab2SectionBodyPadding"
            tabContentRef={contentRef2}
          />
        </Tabs>
        <>
          {activeTabKey === 1 && (
            <TabContent
              eventKey={1}
              id="tab1SectionBodyPadding"
              ref={contentRef1}
              style={{ flex: '1 1', display: 'flex', flexDirection: 'column' }}
            >
              <TabContentBody>
                <QuickStartController quickStart={quickStart} nextQuickStarts={nextQuickStart} />
              </TabContentBody>
            </TabContent>
          )}
          {activeTabKey === 2 && (
            <TabContent
              eventKey={2}
              id="tab2SectionBodyPadding"
              ref={contentRef2}
              style={{ flex: '1 1', display: 'flex', flexDirection: 'column' }}
            >
              <TabContentBody>{chatbot}</TabContentBody>
            </TabContent>
          )}
        </>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...containerProps} isManagedDrawer={false}>
        <Drawer isExpanded={isDrawerOpen} isInline>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>
              <Page masthead={AppHeader} sidebar={AppSidebar} isManagedSidebar>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setIsDrawerOpen(!isDrawerOpen);
                  }}
                >
                  Toggle Drawer
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    toggleQuickStart('getting-started-with-quick-starts');
                  }}
                >
                  Toggle QS & set tab to QS
                </Button>
                {children}
              </Page>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
        <QuickStartCloseModal
          isOpen={modalOpen}
          onConfirm={onModalConfirm}
          onCancel={onModalCancel}
        />
      </QuickStartContainer>
    </React.Suspense>
  );
};
export default App;
