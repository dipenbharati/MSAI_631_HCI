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




## Testing the bot using Bot Framework Emulator on Linux

[Bot Framework Emulator](https://github.com/microsoft/botframework-emulator) is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

- Install the latest Bot Framework Emulator from [here](https://github.com/Microsoft/BotFramework-Emulator/releases)

- ./BotFramework-Emulator-4.15.1-linux-x86_64.AppImage

### Connect to the bot using Bot Framework Emulator

- Launch Bot Framework Emulator
- File -> Open Bot
- Enter a Bot URL of `http://localhost:3978/api/messages`

## Interacting with the bot

Enter text in the emulator.  The text will be echoed back by the bot.

## Deploy the bot to Azure

To learn more about deploying a bot to Azure, see [Deploy your bot to Azure](https://aka.ms/azuredeployment) for a complete list of deployment instructions.

## Further reading

- [Bot Framework Documentation](https://docs.botframework.com)
- [Bot Basics](https://docs.microsoft.com/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0)
- [Activity processing](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-activity-processing?view=azure-bot-service-4.0)
- [Azure Bot Service Introduction](https://docs.microsoft.com/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0)
- [Azure Bot Service Documentation](https://docs.microsoft.com/azure/bot-service/?view=azure-bot-service-4.0)
- [Azure CLI](https://docs.microsoft.com/cli/azure/?view=azure-cli-latest)
- [Azure Portal](https://portal.azure.com)
- [Channels and Bot Connector Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-concepts?view=azure-bot-service-4.0)