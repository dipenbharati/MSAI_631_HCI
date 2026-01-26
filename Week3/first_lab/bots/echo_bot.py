# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License.

from botbuilder.core import ActivityHandler, MessageFactory, TurnContext
from botbuilder.schema import ChannelAccount


class EchoBot(ActivityHandler):
    async def on_members_added_activity(self, members_added: [ChannelAccount], turn_context: TurnContext):
        for member in members_added:
            if member.id != turn_context.activity.recipient.id:
                await turn_context.send_activity("Hello and welcome!")

    async def on_message_activity(self, turn_context: TurnContext):
        # Get the original user message
        user_text = turn_context.activity.text

        # Reverse it
        reversed_text = user_text[::-1]

        # Send the reversed message as the bot's reply
        return await turn_context.send_activity(reversed_text)
        # return await turn_context.send_activity(
        #     MessageFactory.text(f"Echo: {turn_context.activity.text}")
        # )
