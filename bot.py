# -*- coding: utf-8 -*-
import apiai, codecs, json


def talk(messenger = None):
    ClientAccessToken = 'cface21f47f54a0781984a7dc8cf9a45'
    ai = apiai.ApiAI(ClientAccessToken)
    request = ai.text_request()
    request.lang = 'vi'
    request.session_id = "<SESSION ID, UNIQUE FOR EACH USER>"
    request.query = messenger
    api_response = request.getresponse()
    json_reply = api_response.read()

    decoded_data = json_reply.decode("utf-8")
    response = json.loads(decoded_data)
    reply = response['result']['fulfillment']['speech']
    return reply