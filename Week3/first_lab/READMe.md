# EchoBot

 # Environment Setup
- Create the folder in the repo (Week3 first_lab)
- Install python3.12, pip3 and python3.12-venv as below:
    `sudo apt install python3`
    `sudo apt install python3-pip`
    `sudo apt install python3.12-venv`

- Activate your desired virtual environment `source venv/bin/activate`
- In the terminal, type `pip install -r requirements.txt`
- Run your bot with `python app.py`


  # Dependencies for Executing Microsoft Bot framework application

  - `sudo apt install libsecret-1-0 libsecret-tools`
  - `sudo apt install libfuse2t64`
  - `./BotFramework-Emulator-4.15.1-linux-x86_64.AppImage --no-sandbox`

  # Download Bot Framework Emulator on Linux
    - [Bot Framework Emulator](https://github.com/microsoft/botframework-emulator) is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

    - Install the latest Bot Framework Emulator from [here](https://github.com/Microsoft/BotFramework-Emulator/releases)

    - ./BotFramework-Emulator-4.15.1-linux-x86_64.AppImage

  # Connect to the bot using Bot Framework Emulator
    - Launch Bot Framework Emulator
    - File -> Open Bot
    - Enter a Bot URL of `http://localhost:3978/api/messages`

  # Interacting with the bot
    - Enter text in the emulator.  The text will be echoed back by the bot.

