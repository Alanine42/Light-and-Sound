# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Yupeng (Alan) Sun**

Time spent: **12** hours spent in total

[Link to project](https://glitch.com/edit/#!/balanced-cyclic-braid) 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (My Little Pony!)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Game button scales up in response to user's mouse hover (more interactive)
- [x] Graduate transition of color when a button is clicked

## Video Walkthrough (GIF)

![Musical Game](https://user-images.githubusercontent.com/68050193/159311632-6303f5d0-31c3-4497-b6c7-b60c3e18c80a.gif)
![Special buttons](https://user-images.githubusercontent.com/68050193/159311643-85d64cdd-deb1-4c79-ae93-f93b735ef041.gif)
![Made a mistake](https://user-images.githubusercontent.com/68050193/159311648-427bc686-244a-4f75-84cf-4ea90e0900b5.gif)
![Different Clues](https://user-images.githubusercontent.com/68050193/159311419-79eb6e88-783d-4632-92ca-9723d8651f7c.gif)

## Reflection Questions
> 1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

W3Schools provide me great help on [button transform](https://www.w3schools.com/cssref/css3_pr_transform.asp), 
[hoverable buttons](https://www.w3schools.com/css/css3_buttons.asp), and 
[imbedding images](https://www.w3schools.com/tags/tag_img.asp).

> 2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

My biggest challenge was to add an image that hides/unhides itself for each game button. 

In school's CS assignments, I usually do all the work in one programming language (C++ for data structures, Python for web scrapers, etc). It's my first time getting several languages to work together. So when it comes to adding images (HTML elements) that hide/unhide themselves (CSS) when the user is clicking on them (HTML and Javascript), it's not an easy cake for me.  

The various tutorials I found online weren't consistent. Some use an HTML attribute to capture the user's mouse-clicking, while others use Javascript events. Self-teaching could be a fun process, but the discrepancies among various sources of information are discouraging. After many tries and inductive reasoning, I came up with the following procedure: 

    1. In the HTML element the user clicks, add an attribute to delegate to a Javascript function (for example `onmouseover="moveImg(img_id)"`). 
    2. In the Javascript function, modify the relevant element's appearance by changing its classes list.
    3. In CSS, select the corresponding element by its class and declare special rules to modify its appearance (scales, rotate, change background color... you name it :)

After coming up with the above procedure, I add responsive images to each game button. Building on what I have, adding more features becomes easier and more efficient. My "challenge" gradually shifts from understanding how things work to making aesthetic and design choices. 

In the end, I made the musical buttons a lot more responsive to the user. When you move over a button, it responds by enlarging itself. When you click on it, the image reveals itself. The background color also gradually changes to a darker one depending on how long you hold the mouse. 

Looking back, implementing these features wasn't the hardest. The greatest challenge was to dive through the immense internet of knowledge, discern the useful ones, and apply them to my situation.

> 3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

How does a website adapt to mobile devices? Out of curiosity, I played my "Light and Sound Game" on the phone's browser but had a terrible experience. The buttons couldn't shrink themselves to fit in a phone's screen, so I had to scroll up and down for each button. While scrolling, there is ambiguity between "clicking" and "hovering on" a button. Sometimes a button is clicked while I had no intention to do so. It was a discouraging experience overall. 

Given a large base of mobile users, how would a good web developer deal with mobile customers? From my 10-ish years of web surfing, I recall some websites have a poor interface for phone browsers, but some are really well-adapted to phones. What makes this difference? Is HTML + CSS + Javascript adequate for all sorts of web development? 

Besides adaptability, some [websites](https://www.apple.com/ipad-pro/) are super interactive. The web content changes as the user scroll down their screen, which feels amazing. How are those websites developed? They use HTML + CSS + Javascript for sure, but there must be some other cool tricks they used while creating such masterpieces :)  I am eager to learn more.


> 4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I will add a status bar to let the player know how far they have accomplished. The status bar removes uncertainty and could be more encouraging to the player. The player may also feel they are "in control of the situation" instead of merely following the computer's clue, which may look like a black box. 

Better music. Instead of generating random clues for each game, I would "hardcode" the chords for [Canon in D](https://www.youtube.com/watch?v=NlprozGcs80), [Croatia Rhapsody](https://www.youtube.com/watch?v=7DKBKZ8Cxeo), [Summer](https://youtu.be/l0GN40EL1VU?t=45). I choose these pieces because their chord progressions are beautiful and easy. Six chords/buttons are just the right amount :)  If I had more time I could figure out how to add customized sound in HTML / Javascript.

Instead of clicking, the computer/player could also slide the button (up/down/left/right). It's a challenge for both the users and the developer. I know CSS can translate an element by x- or y-axis, but to synchronize the translation with the player's mouse movement is not an easy cake. I wish to learn more :) 


## Interview Recording URL Link (working on it:)

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Yupeng Sun]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
