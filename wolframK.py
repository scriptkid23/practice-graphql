#!/usr/bin/python
# -*- coding: utf8 -*-
import wolframalpha as wfa
def wolfram_question(query = None):
    client = wfa.Client('YGW25Y-XH7JUUA8AR')
    res = client.query(query)
    output = next(res.results).text 
    return output
    

    

