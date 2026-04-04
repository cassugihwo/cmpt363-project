# WriteAI
A writing tool with an integrated AI text assistant. Made with React and Node.js. AI functionalities powered by Google Gemini.

Made as a project for CMPT363, SFU. Spring 2026

By Cas, Ali, Audrey

## Table of Contents

- [How to run the application](#how-to-run-the-application)
  - [Installing dependencies](#1-installing-dependencies)
  - [Add Gemini API key](#2-add-gemini-api-key)
  - [Running the application](#3-running-the-application)
- [Usage Instructions](#usage-instructions)
  - [1. Start](#1-start)
  - [2. Rewrite Feature (Sliders)](#2-rewrite-feature-sliders)
  - [3. Rewrite Feature (Prompts)](#3-rewrite-feature-prompts)
  - [4. Create Feature](#4-create-feature)
- [Attributions](#attributions)

## How to run the application
To run this project, you must have Node.js installed on your computer.

### 1. Installing dependencies
Before running the application, install dependencies in both the frontend and backend folder:
```bash
cd backend
npm install
cd ..
cd frontend
npm install
```

### 2. Add Gemini API key
Go to /backend and create a .env file.
Add this to the file:
```
GEMINI_API_KEY=replace_with_api_key
```
Replace "replace_with_api_key" with your Gemini API key.

### 3. Running the application
The frontend and backend servers must be run separately in **separate terminals.**

Run backend:
```bash
cd backend
npm run dev
```
This should start the backend server on http://localhost:5000/.

Run frontend:
```bash
cd frontend
npm run dev
```

The application should run on http://localhost:5173/.

## Usage Instructions
The following instructions will give you a comprehensive walkthrough through our two core features: the Rewrite and Create text features. 

### Instructions List
- [1. Start](#1-start)
- [2. Rewrite Feature (Sliders)](#2-rewrite-feature-sliders)
- [3. Rewrite Feature (Prompts)](#3-rewrite-feature-prompts)
- [4. Create Feature](#4-create-feature)

### 1. Start
The home page is where users can create a new document, open another document or look through their recent documents.

>#### 1. Click 'New Document'

For the purpose of this walkthrough, click **'New Document'**. 

This should open a document with two paragraphs of a cover letter draft.

>#### 2. Open the AI tool panel

In the newly opened document, open the AI panel by clicking on the tab on the right with the icon that looks like a pencil and a purple star.

### 2. Rewrite Feature (Sliders)
After the AI panel has been opened, the default mode selected should be the Rewrite (sliders) mode.

>#### 1) Select text

While the panel is open, select some text to rewrite from the document. 

We recommend selecting the entire paragraph that starts with "I am able to provide professional..." 

The selected text should appear in the white text box at the top of the panel.
If this doesn't happen, you can manually copy and paste the text into the box.

>#### 2) Adjust sliders

Adjust the sliders according to how you want the text to be rewritten (eg. high Professionalism, low Complexity...).  

>#### 3) Delete a slider

Delete any unwanted sliders (eg. the Emotion slider.)
Delete a slider by clicking on the three dots to the right, and clicking delete.

>#### 4) Add and name a slider

At the bottom of the sliders, click on the + icon. This should add a new slider and prompt you to name the slider. 

Name it to whatever parameter you wish (eg. Friendliness).

Hit Enter or click anywhere to confirm your new slider.

>#### 5) Rename a slider

Click on any slider's name to rename it. 
(eg. Try renaming the 'Complexity' slider to 'Detail').

>#### 6) Enable Advanced options

Below the sliders, click on Advanced Options to open the advanced options settings.

Click the 'Include Advanced Options' checkbox to enable it.

>#### 7) Adjust Advanced options to liking

Adjust the advanced options to your liking. You may leave fields empty if you don't want to adjust them. 
The following options are available:

**Word count**
- Minimum word count
- Maximum word count

**Include (separate words/phrases with commas)**
- 'All of these words' - include all the specified words
- 'These exact phrases' - include the exact specified phrase(s)
- 'Any of these words' - include any of the specified words
- 'None of these words' - exclude all of the specified words

>#### 8) Click the Generate button to rewrite text
Once satisfied with the settings, click the purple 'Generate' button at the bottom right of the panel to rewrite text.
The rewritten text should appear in the text box.

>#### 9) Edit rewritten text as needed
Try editing the rewritten text in the box. Add or delete words/sentences as you wish.

>#### 10) Click Finish button or Clipboard button
Insert the text into the document by clicking the white 'Finish' button on the bottom left of the panel. This should replace the previously selected text in the document.

Alternatively, click the Clipboard button next to the Finish button to copy the text into your clipboard, and paste the text into the document.

### 3. Rewrite Feature (Prompts)

>#### 1) Switch to prompt mode

Above the white text box and below the headers Rewrite and Create, there is a toggle with a slider icon and a chat icon. Click the chat icon to switch to prompt mode.

Example prompts have already been given.

>#### 2) Select text (or keep text)

Select the text you wish to rewrite, or keep the text in the box.

>#### 3) Add a prompt

The bottom of the panel has a text input where you may enter prompts describing how you wish the text to be rewritten.

(eg. "Emphasize my communication skills")

>#### 4) Delete a prompt

Delete any unwanted prompt by clicking on the red trash icon.

>#### 5) (optional) Adjust Advanced options to liking

Adjust advanced options if wanted. Settings should carry over from sliders mode if any advanced options were entered.

If advanced options is not wanted, disable it by clicking the Include Advanced Options checkbox.

>#### 6) Generate and Finish 

Same as before, click the 'Generate' button to generate text.

Click the 'Finish' button to insert text in the document or copy text to the clipboard by clicking the Clipboard icon.

### 4. Create Feature

>#### 1) Switch to 'Create' feature

Switch to the Create feature by clicking on 'Create' at the top of the panel.

>#### 2) Add prompts

The bottom of the panel has a text input where you may enter prompts describing what text you would like to write.

(eg. "Write a short paragraph about the importance of teamwork in the workplace").

Add as many prompts as desired.

>#### 3) Delete prompts

Delete any undesired prompts by clicking on the prompt's red trash icon.

>#### 4) Adjust Advanced options - Select space in document

The Advanced Options section has an additional feature in Create mode.
Open Advanced Options and ensure 'Include Advanced Options' is enabled.
 
**Enable Select Space mode**

Under Word Count, a new checkbox ('Select space in the document to insert generated text') should appear. Clicking on the checkbox enables the 'Select Space' mode.

'Select Space' mode is an alternative and more intuitive way to tell the AI tool how much text needs to be generated.

**Select Space in Document**

While that mode is on, click anywhere on the text. A purple + icon should appear. Click that + icon.

Drag the button that says 'Drag to add' to tell the AI tool how much text you want generated. 

For this walkthrough, drag and select just a few lines.

The approximate number of words to be generated will appear in the tool panel (under the 'Select Space' checkbox).

**Adjust the rest of Advanced Options to your liking**

Feel free to fill out the remaining 'Include' fields as desired.

>#### 5) Generate and Finish

Same as before, click the 'Generate' button to generate text.

Click the 'Finish' button to insert the generated into the purple selection.


## Attributions
This project’s code was developed with assistance from generative AI tools, including Figma Make and GitHub Copilot. However, the user interface design and the application’s core logic were created and implemented by the group members.