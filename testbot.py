import bot 
import TTSpeak 
import voices

while(True):
    question = str(input('question:'))
    messenger = bot.talk(messenger=question)
    TTSpeak.textToSpeech(messenger)
    voices.play()
    
