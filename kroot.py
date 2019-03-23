#!/usr/bin/python
# -*- coding: utf8 -*-

import TTSpeak
import voices
import re

import wolframK
import wikipediaK
import bot
'''
while True:
    question = str(input("question:"))
    if(question == 'exit'):break
    try:
        contentWolf = wolframK.wolfram_question(question)
        print("bot: %s"%contentWolf)
    except:
        contentWiki = wikipediaK.wiki_question(question,'summary')
        if(len(contentWiki) != 0):
            print("bot: %s"%contentWiki)
        else:
            messenger = bot.talk(question)
            print("bot: %s"%messenger)
'''
def requestMessenger(question = None):
    try:
        contentWolf = wolframK.wolfram_question(question)
        return contentWolf
    except:
        contentWiki = wikipediaK.wiki_question(question,"summary")
        if(len(contentWiki)!= 0):
            return contentWiki
        else:
            messenger = bot.talk(question)
            if(len(messenger) != 0):
                return messenger
            else:
                return "Tôi chưa được học"
while True:
    question = str(input("question:"))
    if(question == 'exit'):break
    response = requestMessenger(question)
    print("bot: %s"%response)
    


