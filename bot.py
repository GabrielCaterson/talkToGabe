"""
Gabriel Caterson
11/21/20
bot.py
A discord bot.
"""

import os

#import discord.py-1.5.1
import discord

from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

client = discord.Client()

@client.event
async def on_ready():
    #print(f'{client.user} has connected to Discord!')
	print('Hello world! (and bordoga)')
client.run(TOKEN)
