#!/usr/bin/python
# -*- coding: utf8 -*-
import wikipediaapi

wiki_wiki = wikipediaapi.Wikipedia('vi')
def wiki_question(query = None,contentType = None):
    page = wiki_wiki.page(query)
    if(contentType == 'summary'):
        content = page.summary
    if(contentType == 'title'):
        content = page.title
    return content 
