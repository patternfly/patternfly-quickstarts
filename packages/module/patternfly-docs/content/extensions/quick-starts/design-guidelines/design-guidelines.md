---
# Sidenav top-level section
# should be the same for all markdown files for each extension
section: extensions
# Sidenav secondary level section
# should be the same for all markdown files for each extension
id: Quick starts
# Tab
source: design-guidelines
sourceLink: https://github.com/patternfly/patternfly-quickstarts/blob/main/packages/module/patternfly-docs/content/extensions/quick-starts/design-guidelines/design-guidelines.md
---

# Elements

## Quick start screen

<img src="./img/qs-context.png" alt="A quick start in context of a UI" width="1680"/>

Quick start screens contain a few different components:
- [Catalog view](/#catalog-view) 
- [Cards](/#cards) 
- [Drawer:](/#drawer) Contains an introduction screen, tasks, and a “check your work” module.

## Catalog view
Multiple quick starts are often presented to users in a catalog view of multiple cards.

<img src="./img/catalog-elements.png" alt="quick start catalog" width="1680"/>

Catalogs with 14 or fewer quick starts should include a simple toolbar with the following elements:
1. Keyword filter
1. Status filter
1. Item count

Catalogs with 15 or more quick starts should include a more complex toolbar with filtering functionality, presented as vertical filters on the side of the page.

For quick starts in a mixed catalog of resources, we recommend including 1 of the following action links on the card, so that users can easily recognize how to interact with it. Only display 1 action on a card at a time:

- **Start:** Use if the quick start hasn't been started yet.
- **Continue:** Use if the quick start is in progress.
- **Restart:** Use if the quick start has already been completed.

<img src="./img/mixed-catalog.png" alt="Mixed resource catalog" width="1062"/>

## Card

Quick starts are usually surfaced within a catalog as [clickable cards.](/components/card)

<img src="./img/card-elements.png" alt="Elements of a card" width="370"/>

1. **Icon:** An icon associated with the quick start topic. If no specific icon exists, use the rocket icon.
1. **Title:** The title (or display name) that briefly identifies the function that the quick start accomplishes. Avoid using the phrase “how to,” and instead begin the title with a gerund (verbs that end in ‘ing’).
    - Example: “Creating a Jupyter notebook”
1. **Labels:** [Filled labels](/components/label#filled-labels) communicate the estimated completion time and status of a quick start. If the quick start is presented in a mixed catalog of resources, a label can indicate the type of resource.
1. **Description:** A description that summarizes the quick start outcome in 4 lines or fewer, without truncating. Begin the description with an action verb. 
    - Example: “Connect to Red Hat OpenShift Streams for Apache Kafka from a Jupyter notebook.”
1. **Prerequisites (optional):** A bulleted list of prerequisites, displayed in a popover, which outlines permissions needed to complete the tasks, and anything that must be pre-configured before starting the quick start. Avoid phrasing prerequisites as questions. The total number of prerequisites is listed in parentheses on the quick start card.
    - Example: “You have completed the "Getting started with Red Hat OpenShift Streams for Apache Kafka" quick start”

<img src="./img/prerequisites.png" alt="Example of prerequisites" width="395"/>

## Drawer
Quick starts use the [drawer component](/components/drawer) to contain all step-by-step instructions and tasks.

<img src="./img/side-panel-elements.png" alt="Side panel elements" width="449"/>

1. **Quick start title:** The quick start title that is shown on the card.
2. **Duration:** The estimated amount of time the quick start will take to complete.
3. **Close:** The close button, which allows users to exit the quick start at any time.
4. **Button bar:** The button bar, which allows users to advance between quick start tasks. 
  - For task screens, the buttons are **Next**, **Back**, and **Restart**. 
  - For the intro screen, the only button is the **Start** button. 
  - On the completion screen, the buttons are **Close**, **Back**, and **Restart**.

The drawer does not overlay the UI and instead pushes it to the left, including the masthead. It can be resized as needed. Everything is contained in the drawer and remains anchored to the right, allowing the user to follow the steps without blocking any parts of the UI. This prevents any modals or side panels within the UI from covering the quick start instructions. 

<img src="./img/side-panel.png" alt="Side panel" width="1680"/>

<img src="./img/side-panel-resized.png" alt="Resized side panel" width="1680"/>

### Introduction screen
The first screen of any quick start is the introductory screen, which includes most of the information from the quick start card.

A quick start introduction provides a concise and informative description of what the quick start accomplishes. A long introduction can overwhelm the user. Keep the introduction to  a maximum of 4-5 sentences.

Write about what the user will do, not about the quick start itself.  For example, instead of “This quick start will teach you how to deploy an application”, write “You will complete an application deployment in this quick start”. 

<img src="./img/introduction-screen.png" alt="Introduction screen" width="449"/>

### Tasks
Tasks are high-level objectives users complete to accomplish the quick start’s overall goal. Task components include the title, description, failed task help, and a summary. Each task consists of 2-10 steps that help users navigate through the UI to complete the task goal.

<img src="./img/task.png" alt="Example task" width="449"/>

#### Task title 

Each individual task must have a title. When naming a specific task, the title reflects what it accomplishes. Write the title as a statement (rather than a “how to” tutorial). Each title should begin with an action verb (such as connect, save, remove, create, launch, and so on) that indicates the specific action the task completes, followed by the title of the product it concerns. 

Example: "View the details of your sample application"

#### Task description

In the task description, explain the importance of the task for the user. When writing a task description, begin with a call to action, or a statement that identifies a desired action or outcome. Then write a brief statement that explains how the user will accomplish the task and introduces the task’s steps. 

Example: "Notebooks and applications need the connection information for your {product-title} instance. Follow these steps to save the required information for later use… To obtain connection information to {product-title}:”

#### Task steps

Steps are a sequenced list of actions to guide the user through completing a larger task. Make the steps concise and easy to follow, beginning where the user is when they access the quick start in the user interface. 

When writing individual steps, use the word “click” to refer to buttons and labels, and use “select” to refer to check-boxes, drop-down menus, and radio buttons. 

Example: “Select an application from the options provided in the drop-down menu.” 

#### Task instructions

Instructions allow users to verify if they’ve completed the task successfully. 

Remember to clearly distinguish between a user action and additional information on product functionality. Instructions are written as a question, and users should be given context to how it relates back to the task at hand. 

Example: “To verify that you have launched the Jupyter notebook: Do you see a message in the page that says **The server is starting up**?“

#### Failed task help 

Failed task help refers to a line in the quick start template where you can add a failed task message. The text you enter here alerts a user to an incomplete or failed portion of their task. 

Example: “This task is not verified yet. Try the task again.”

You can include more context as needed.

#### Task summary

Quick starts have 2 potential task summaries: success or failure:

- **Success:** Tell users that they have finished their task. Keep the sentence short and use the personal pronoun "you". 
  - Example: “Congratulations, you have launched JupyterHub.”

- **Failure:** Notify the user that their task failed, and encourage them to try the task again. Avoid using the personal pronoun ‘you,’ because it places unnecessary blame on the user. If possible, provide the user with a brief suggestion as to why their task may have failed, or a suggestion as to what they can check if it continues to fail. 
  - Example: “Try these steps again.”


### “Check your work” module

The “check your work” module, which can be made required or optional, helps users confirm that they’ve completed a task. The module is shown at the bottom of the side panel for each task. You should ask yes/no questions, allowing the user to select the radio button with the appropriate response.

<img src="./img/check-your-work.png" alt="Check your work module" width="431"/>

If a user selects **Yes**, the module and associated task header turn green, and the header icon becomes a checkmark.

<img src="./img/task-yes.png" alt="Check your work module with Yes selected" width="449"/>

If a user selects **No**, the module and associated task header turn red, and the header icon becomes an **X**. When possible, explain what a user must do to complete the task, or link to relevant documentation.

<img src="./img/task-no.png" alt="Check your work module with No selected" width="449"/>

## Content considerations

Quick starts can use a more conversational, informal tone. Aim for a “fairly conversational” style, which is authoritative but encouraging and approachable.

To achieve a more conversational tone, try the following:

- Use the second person (“you”).
  - Example: “In minutes, you can set dates, document your first user story, assign a task or two, and dive into the code.
- Write shorter, simpler sentences, and keep content minimal to support easy skimming and avoid overwhelming users. 
- Avoid unnecessary technical jargon, and define terms and phrases that might be unfamiliar to new users. 
- Use contractions (you’ll, can’t, you’ve) to strike an informal tone, and to save space.
- Avoid sentence fragments, poor grammar, and excessive punctuation, which can distract from the task.

In addition to being conversational, you should adhere to the following guidelines to ensure that your quick start is useful and effective for all users:

- Always keep in mind that your content must be appropriate for a global audience.
- Clearly state the outcome at the beginning of the quick start and provide brief context to explain why the user is completing the tasks.
- Avoid screen captures. They require regular maintenance and can potentially lead to issues around accessibility and page loading.
- (Optional) Help users stay in the quick start by including necessary information within the quickstart and avoiding outbound links. As needed, provide a carefully curated set of links at specific points in the quick start. You may want to provide links:
  - Within a quick start task, if users could benefit from additional conceptual or reference information.
  - At the end of quick starts, if users could benefit from additional technical information upon completion.
  - Within the [“check your work” module](#check-your-work-module), after a user answers **No**, if more robust information can help them understand the actions they must take to complete the task.

For more specific quick start content guidelines, refer to [“Best practices for writing quick starts” on UXD Hub](https://www.uxd-hub.com/entries/resource/best-practices-for-writing-quick-starts). The [Red Hat OpenShift documentation](https://docs.openshift.com/container-platform/4.16/web_console/creating-quick-start-tutorials.html) contains similar guidelines, specifically for Red Hat OpenShift.