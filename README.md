# Swiggy Magical Arena

## Game design and Rules
Design a Magical Arena. Every Player is defined by a “health” attribute, “strength” attribute and an “attack” attribute - all positive integers. The player dies if his health attribute touches 0. 
 1. Any two player can fight a match in the arena. Players attack in turns. Attacking player rolls the attacking dice and the defending player rolls the defending dice. The “attack”  value multiplied by the outcome of the  attacking dice roll is the damage created by the attacker. The defender “strength” value, multiplied by the outcome of the defending dice is the damage defended by the defender. Whatever damage created by attacker which is in excess of the damage defended by the defender will reduce the “health” of the defender. Game ends when any players health reaches 0

 2. Player with lower health attacks first at the start of a match. 

 3. Assume two players . Player A 50 health 5 strength 10 attack Player B 100 health 10 stregnth and 5 attack . Attacking die and Defending die are both 6 sided die with values ranging from 1- 6

    1. Player A attacks and rolls die. Die roll : 5 . Player B defends and rolls die. Die roll 2

    2. Attack damage is 5 * 10 = 50 ; Defending strength = 10 * 2 = 20 ; Player B health reduced by 30 to 70

    3. Player B attacks and rolls die. Die roll : 4. Player A defends and rolls die. Die Roll 3

    4. Attack damage is 4 * 5 = 20 ; Defending strength = 5 * 3 = 15 ; Player A health reduced by 5 to 45

    5. And so on 


## Description
This backend repository is developed using Node.js and the Express framework which hosts a suite of APIs designed for playing the game with above rules. These APIs are implemented with following principles like simple design , Readability, Modelling, and Maintainability.

## Table of Contents


-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Set-up](#set-up)
-   [Run](#run)
-   [Project Structure](#project-structure)



## Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js v20.15.0 (LTS)](https://nodejs.org/en/download/package-manager "Click here for download") ( Strictly use specified version. )
-   Visual Studio Code or any other IDE of your
    choice ([Visual Studio Code](https://code.visualstudio.com/download "Click here for installation instructions")
    is recommended)
-   [Git CLI](https://kinsta.com/knowledgebase/install-git/ "Click here for installation instructions") for tracking
    changes

## Installation

1. Make sure you have installed all prerequisites.

2. Clone the repository using the command `git clone` or download the zip file and extract it.

3. Open the project in any IDE (Visual Studio Code is preferred).

## Set-Up

1. Install dependencies into the node environment:

```bash
npm install
```

2. Install nodemon tool:

```bash
npm install -g nodemon
```

3. Prepare Husky for hooks:

```bash
npm run Prepare
```

4. Create .env file at root level.

Now, the setup is complete and ready to run.

## Run

Run the application using the following command:

```bash
npx nodemon
```

## Project Structure

<details>
<summary> Project Structure </summary>

```plaintext
├── .husky
│   ├── commit-msg
│   ├── pre-commit
├── src
│   ├── app.ts
│   ├── common
│   │   ├── logger.ts
│   ├── config
│   │   ├── app.config.ts
│   ├── constants
│   │   ├── game.constant.ts
│   │   ├── route.constant.ts
│   ├── controllers
│   │   ├── game.controller.ts
│   ├── interfaces
│   │   ├── player.interface.ts
│   ├── middlewares
│   │   ├── statushandler.middelware.ts
│   ├── models
│   │   ├── player.model.ts
│   ├── routers
│   │   ├── game.router.ts
│   ├── services
│   │   ├── game.service.ts
│   ├── utils
│   │   ├── diceRoller.ts
│   │   ├── uniqueid.ts
├── .env.example
├── .gitignore
├── .eslintrc.json
├── commitlint.config.js
├── .prettierrc
├── package-lock.json
├── nodemon.json
├── package.json
├── tsconfig.json
├── server.ts
├── README.md
```

</details>

